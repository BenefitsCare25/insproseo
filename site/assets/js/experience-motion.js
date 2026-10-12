(() => {
  'use strict';
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
  if (!gsap || !ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();

  function entranceMotion() {
    const heroCopy = document.querySelector('[data-hero-copy]');
    if (heroCopy) gsap.from(heroCopy.children, { y: 28, opacity: 0, duration: .85, stagger: .09, ease: 'power3.out', clearProps: 'all' });
    gsap.utils.toArray('[data-hero-image]').forEach(image => {
      gsap.from(image, { clipPath: 'inset(8% 0 0 0 round 24px)', opacity: .4, y: 25, duration: 1.1, ease: 'power3.out', clearProps: 'all' });
      const photo = image.querySelector('img');
      if (photo) gsap.fromTo(photo, { scale: 1.05 }, { scale: 1.16, ease: 'none', scrollTrigger: { trigger: image, start: 'top top', end: 'bottom top', scrub: 1 } });
    });
    gsap.utils.toArray('[data-enter]').forEach(element => {
      gsap.from(element, { y: 32, opacity: 0, duration: .8, ease: 'power3.out', clearProps: 'all', scrollTrigger: { trigger: element, start: 'top 91%', once: true } });
    });
    gsap.utils.toArray('[data-stagger]').forEach(group => {
      gsap.from(group.children, { y: 38, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out', clearProps: 'all', scrollTrigger: { trigger: group, start: 'top 90%', once: true } });
    });
  }

  function productMotion() {
    const product = document.querySelector('.xp-benefits-showcase');
    if (!product) return;
    gsap.fromTo(product.querySelector('.xp-benefits-photo img'), { scale: 1.08 }, {
      scale: 1, ease: 'none', scrollTrigger: { trigger: product, start: 'top 90%', end: 'bottom 70%', scrub: .7 }
    });
    gsap.from(product.querySelector('.xp-benefit-preview'), {
      y: 26, duration: .8, ease: 'power3.out', clearProps: 'transform',
      scrollTrigger: { trigger: product, start: 'top 78%', once: true }
    });
  }

  function readingProgress() {
    const article = document.querySelector('.xp-article');
    if (!article) return;
    gsap.to('[data-reading-progress]', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: article, start: 'top 35%', end: 'bottom bottom', scrub: true } });
    document.querySelectorAll('[data-reading-section]').forEach(section => {
      const setActive = () => document.querySelectorAll('[data-reading-link]').forEach(link => link.classList.toggle('is-active', link.dataset.readingLink === section.id));
      ScrollTrigger.create({ trigger: section, start: 'top 40%', end: 'bottom 40%', onEnter: setActive, onEnterBack: setActive });
    });
  }

  media.add('(prefers-reduced-motion: no-preference)', entranceMotion);
  media.add('(prefers-reduced-motion: no-preference)', productMotion);
  readingProgress();
  document.fonts.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
})();
