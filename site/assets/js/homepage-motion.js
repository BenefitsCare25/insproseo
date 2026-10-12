(() => {
  "use strict";

  const rail = document.querySelector("[data-product-rail]");
  const viewport = document.querySelector("[data-product-viewport]");
  const track = document.querySelector("[data-product-track]");
  const slides = Array.from(document.querySelectorAll("[data-product-slide]"));
  const current = document.querySelector("[data-product-current]");
  const progress = document.querySelector("[data-product-progress]");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");

  const updateProductStatus = (value) => {
    const bounded = Math.max(0, Math.min(1, value));
    const activeIndex = Math.min(slides.length - 1, Math.round(bounded * (slides.length - 1)));
    if (current) current.textContent = String(activeIndex + 1).padStart(2, "0");
    if (progress) progress.style.transform = `scaleX(${bounded})`;
    slides.forEach((slide, index) => slide.classList.toggle("is-active", index === activeIndex));
  };

  const bindNativeRail = () => {
    if (!viewport || !track) return;
    const onScroll = () => {
      const distance = Math.max(1, viewport.scrollWidth - viewport.clientWidth);
      updateProductStatus(viewport.scrollLeft / distance);
    };
    viewport.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  };

  const bindPointerDepth = () => {
    if (!window.gsap || !matchMedia("(pointer: fine)").matches || reduceMotion.matches) return;
    slides.forEach((slide) => {
      const image = slide.querySelector("img");
      if (!image) return;
      slide.addEventListener("pointermove", (event) => {
        const bounds = slide.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
        const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;
        window.gsap.to(image, { x, y, duration: 0.6, ease: "power3.out", overwrite: true });
      });
      slide.addEventListener("pointerleave", () => {
        window.gsap.to(image, { x: 0, y: 0, duration: 0.8, ease: "power3.out", overwrite: true });
      });
    });
  };

  const bindProcessStory = () => {
    if (!window.gsap || !window.ScrollTrigger) return;
    const steps = Array.from(document.querySelectorAll("[data-process-step]"));
    const processProgress = document.querySelector("[data-process-progress]");
    if (!steps.length) return;

    const setProcessProgress = (index) => {
      steps.forEach((step, stepIndex) => step.classList.toggle("is-active", stepIndex === index));
      if (!processProgress) return;
      window.gsap.to(processProgress, {
        scaleX: (index + 1) / steps.length,
        duration: 0.45,
        ease: "power2.out",
        overwrite: true
      });
    };

    steps.forEach((step, index) => {
      window.ScrollTrigger.create({
        trigger: step,
        start: "top 56%",
        end: "bottom 44%",
        onEnter: () => setProcessProgress(index),
        onEnterBack: () => setProcessProgress(index)
      });
    });
    setProcessProgress(0);
  };

  const bindReviewTransition = () => {
    if (!window.gsap || reduceMotion.matches) return;
    const output = document.querySelector("[data-review-output]");
    const form = document.querySelector("[data-review-starter]");
    if (!output || !form) return;
    form.addEventListener("change", (event) => {
      if (event.target.name !== "review-intent") return;
      requestAnimationFrame(() => {
        window.gsap.fromTo(
          output.children,
          { autoAlpha: 0.45, y: 7 },
          { autoAlpha: 1, y: 0, duration: 0.38, stagger: 0.025, ease: "power2.out", overwrite: true }
        );
      });
    });
  };

  const bindGsapRail = () => {
    if (!rail || !viewport || !track || !slides.length || !window.gsap || !window.ScrollTrigger) {
      bindNativeRail();
      return;
    }

    window.gsap.registerPlugin(window.ScrollTrigger);
    const media = window.gsap.matchMedia();
    media.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)", () => {
      document.documentElement.classList.add("has-product-motion");
      const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
      const tween = window.gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: viewport,
          start: "top top+=64",
          end: () => `+=${Math.max(distance() * 1.15, innerHeight * 1.6)}`,
          pin: true,
          scrub: 0.75,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => updateProductStatus(self.progress)
        }
      });
      return () => {
        tween.kill();
        document.documentElement.classList.remove("has-product-motion");
        window.gsap.set(track, { clearProps: "transform" });
      };
    });

    media.add("(max-width: 900px), (prefers-reduced-motion: reduce)", bindNativeRail);
    bindProcessStory();
    addEventListener("load", () => window.ScrollTrigger.refresh(), { once: true });
  };

  updateProductStatus(0);
  bindGsapRail();
  bindPointerDepth();
  bindReviewTransition();
})();
