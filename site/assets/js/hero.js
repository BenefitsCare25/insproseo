(() => {
  "use strict";

  const hero = document.querySelector("[data-story]");
  const stage = document.querySelector("[data-story-stage]");
  const video = document.querySelector("[data-story-video]");
  const loader = document.querySelector("[data-story-loader]");
  const bands = [...document.querySelectorAll("[data-story-band]")];
  if (!hero || !stage || !video || !bands.length) return;

  const VIDEO_URL = "/assets/media/hero-scrub.mp4";
  const VIDEO_BYTES = 13954620;
  const VIDEO_SECONDS = 18.041667;
  const STATIC_GATES = [
    "(max-width: 47.5rem)",
    "(orientation: portrait) and (max-width: 64rem)",
    "(orientation: portrait) and (pointer: coarse)",
    "(orientation: landscape) and (pointer: coarse) and (max-height: 35rem)",
    "(prefers-reduced-motion: reduce)"
  ].map((query) => matchMedia(query));

  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const smoothstep = (value, start, end) => {
    const progress = clamp((value - start) / Math.max(0.0001, end - start));
    return progress * progress * (3 - 2 * progress);
  };

  let isStatic = true;
  let isLoaded = false;
  let isLoading = false;
  let isVisible = true;
  let objectUrl = "";
  let abortController = null;
  let targetProgress = 0;
  let smoothProgress = 0;
  let animationFrame = 0;
  let lastFrameTime = 0;
  let seekInFlight = false;
  let pendingSeek = null;

  const heroProgress = () => {
    const range = Math.max(1, hero.offsetHeight - innerHeight);
    return clamp((scrollY - hero.offsetTop) / range);
  };

  const renderBands = (presentedProgress) => {
    const fade = 0.35 / VIDEO_SECONDS;
    bands.forEach((band, index) => {
      const start = Number(band.dataset.start);
      const end = Number(band.dataset.end);
      const enter = index === 0 ? 1 : smoothstep(presentedProgress, start, start + fade);
      const exit = index === bands.length - 1 ? 1 : 1 - smoothstep(presentedProgress, end - fade, end);
      const opacity = enter * exit;
      const entry = smoothstep(presentedProgress, start, start + fade);
      band.style.setProperty("--band-visibility", opacity.toFixed(3));
      band.style.setProperty("--band-entry", entry.toFixed(3));
      band.classList.toggle("is-interactive", index === bands.length - 1 && opacity > 0.72);
    });
    stage.style.setProperty("--story-progress", presentedProgress.toFixed(4));
    stage.classList.toggle("is-complete", presentedProgress > 0.84);
  };

  const presentedFrame = (_now, metadata) => {
    if (video.duration) renderBands(clamp(metadata.mediaTime / video.duration));
    video.requestVideoFrameCallback(presentedFrame);
  };

  const completeSeek = () => {
    seekInFlight = false;
    if (!("requestVideoFrameCallback" in HTMLVideoElement.prototype) && video.duration) {
      renderBands(clamp(video.currentTime / video.duration));
    }
    if (pendingSeek === null) return;
    const nextSeek = pendingSeek;
    pendingSeek = null;
    requestSeek(nextSeek);
  };

  const requestSeek = (time) => {
    if (!isLoaded || !Number.isFinite(video.duration) || !Number.isFinite(time)) return;
    const safeTime = clamp(time, 0, Math.max(0, video.duration - 0.001));
    if (Math.abs(video.currentTime - safeTime) < 0.015) return;
    if (seekInFlight) {
      pendingSeek = safeTime;
      return;
    }
    seekInFlight = true;
    video.currentTime = safeTime;
  };

  video.addEventListener("seeked", completeSeek);
  video.addEventListener("error", () => {
    seekInFlight = false;
    pendingSeek = null;
    stage.classList.add("is-video-failed");
    if (loader) loader.textContent = "Cinematic view unavailable. Showing the poster image.";
  });

  const animate = (now) => {
    const elapsed = Math.min(100, now - (lastFrameTime || now));
    lastFrameTime = now;
    const smoothing = 1 - Math.pow(0.82, elapsed / 16.667);
    smoothProgress += (targetProgress - smoothProgress) * smoothing;
    if (isLoaded) requestSeek(smoothProgress * video.duration);
    else renderBands(smoothProgress);

    if (!isStatic && isVisible && Math.abs(targetProgress - smoothProgress) > 0.0004) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      smoothProgress = targetProgress;
      if (!isLoaded) renderBands(smoothProgress);
      animationFrame = 0;
      lastFrameTime = 0;
    }
  };

  const handleScroll = () => {
    if (isStatic) return;
    targetProgress = heroProgress();
    if (!animationFrame && isVisible) animationFrame = requestAnimationFrame(animate);
  };

  const updateLoadProgress = (received, total) => {
    const progress = total > 0 ? clamp(received / total) : 0;
    stage.style.setProperty("--load-progress", progress.toFixed(3));
    if (loader) loader.textContent = `Loading cinematic view ${Math.round(progress * 100)}%`;
  };

  const useBlob = (blob) => {
    objectUrl = URL.createObjectURL(blob);
    video.src = objectUrl;
    video.load();
    video.addEventListener("loadedmetadata", () => {
      isLoaded = true;
      smoothProgress = heroProgress();
      requestSeek(smoothProgress * video.duration);
      stage.classList.add("is-video-ready");
      updateLoadProgress(1, 1);
      if (loader) loader.textContent = "Cinematic view ready";
      if ("requestVideoFrameCallback" in HTMLVideoElement.prototype) {
        video.requestVideoFrameCallback(presentedFrame);
      }
    }, { once: true });
  };

  const loadVideo = async () => {
    if (isLoading || isLoaded || isStatic) return;
    isLoading = true;
    abortController = new AbortController();
    try {
      const response = await fetch(VIDEO_URL, { signal: abortController.signal, priority: "low" });
      if (!response.ok) throw new Error("Video request failed");
      const total = Number(response.headers.get("Content-Length")) || VIDEO_BYTES;
      if (!response.body?.getReader) {
        useBlob(await response.blob());
        return;
      }
      const reader = response.body.getReader();
      const chunks = [];
      let received = 0;
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.byteLength;
        updateLoadProgress(received, total);
      }
      useBlob(new Blob(chunks, { type: "video/mp4" }));
    } catch (error) {
      if (error.name !== "AbortError") {
        stage.classList.add("is-video-failed");
        if (loader) loader.textContent = "Cinematic view unavailable. Showing the poster image.";
      }
    } finally {
      isLoading = false;
    }
  };

  const applyMode = () => {
    const nextStatic = STATIC_GATES.some((query) => query.matches);
    isStatic = nextStatic;
    document.documentElement.classList.toggle("use-static-hero", isStatic);
    if (isStatic) {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      if (isLoading && abortController) abortController.abort();
    } else {
      targetProgress = heroProgress();
      smoothProgress = targetProgress;
      renderBands(smoothProgress);
      loadVideo();
      handleScroll();
    }
  };

  STATIC_GATES.forEach((query) => query.addEventListener("change", applyMode));
  addEventListener("scroll", handleScroll, { passive: true });
  addEventListener("resize", handleScroll, { passive: true });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
      if (isVisible) handleScroll();
    }, { threshold: 0.01 });
    observer.observe(hero);
  }

  renderBands(0);
  applyMode();

  addEventListener("pagehide", () => {
    if (abortController) abortController.abort();
    if (objectUrl) URL.revokeObjectURL(objectUrl);
  }, { once: true });
})();
