function initialiseQuestionBoxes() {
  const selector = '.bc-questions, .xp-faq, .sg-faq, .ds-question-board';
  const groups = [...document.querySelectorAll(selector)];
  if (!groups.length) return;
  const printMedia = matchMedia('print');
  const states = [];
  let printing = false;

  groups.forEach((group, index) => {
    const questions = [...group.querySelectorAll('details')]
      .filter(question => question.closest(selector) === group);
    const initial = group.matches('.bc-questions') ? null : questions.find(question => question.open);
    const name = `inspro-questions-${index}`;
    const closeOthers = question => questions.forEach(other => { if (other !== question) other.open = false; });
    questions.forEach(question => {
      question.open = question === initial;
      question.setAttribute('name', name);
      question.querySelector(':scope > summary')?.addEventListener('click', () => {
        if (!question.open && !printing && !printMedia.matches) closeOthers(question);
      });
      question.addEventListener('toggle', () => {
        if (!question.open || printing || printMedia.matches) return;
        closeOthers(question);
      });
    });
    states.push({ questions, name, reading: [] });
  });

  window.addEventListener('beforeprint', () => {
    printing = true;
    states.forEach(state => {
      state.reading = state.questions.map(question => question.open);
      state.questions.forEach(question => {
        question.removeAttribute('name');
        question.open = true;
      });
    });
  });
  window.addEventListener('afterprint', () => {
    states.forEach(state => state.questions.forEach((question, index) => {
      question.open = state.reading[index] || false;
      question.setAttribute('name', state.name);
    }));
    printing = false;
  });
}

function initialiseNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navPanel = document.querySelector(".nav-panel");
  const desktopQuery = matchMedia("(min-width: 64.001rem)");
  const solutionMenu = document.querySelector('.lf-nav-menu');

  const closeMenu = ({ restoreFocus = false } = {}) => {
    if (!navToggle || !navPanel || desktopQuery.matches) return;
    navToggle.setAttribute("aria-expanded", "false");
    navPanel.hidden = true;
    if (solutionMenu) solutionMenu.open = false;
    if (restoreFocus) navToggle.focus();
  };

  if (navToggle && navPanel) {
    navToggle.addEventListener("click", () => {
      const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
      navToggle.setAttribute("aria-expanded", String(willOpen));
      navPanel.hidden = !willOpen;
      if (solutionMenu) solutionMenu.open = willOpen;
    });

    navPanel.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !navPanel.hidden) closeMenu({ restoreFocus: true });
    });

    document.addEventListener("click", (event) => {
      if (!navPanel.hidden && !event.target.closest(".nav-shell")) closeMenu();
    });

    const syncNavigation = () => {
      if (desktopQuery.matches) {
        navPanel.hidden = false;
        navToggle.setAttribute("aria-expanded", "false");
        if (solutionMenu) solutionMenu.open = false;
      } else {
        closeMenu();
      }
    };
    desktopQuery.addEventListener("change", syncNavigation);
    syncNavigation();
  }

  if (solutionMenu) {
    document.addEventListener('click', event => {
      if (desktopQuery.matches && !solutionMenu.contains(event.target)) solutionMenu.open = false;
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && solutionMenu.open) {
        solutionMenu.open = false;
        if (desktopQuery.matches) solutionMenu.querySelector('summary').focus();
      }
    });
    solutionMenu.addEventListener('focusout', () => {
      requestAnimationFrame(() => {
        if (desktopQuery.matches && !solutionMenu.contains(document.activeElement)) solutionMenu.open = false;
      });
    });
  }

}

(() => {
  "use strict";

  initialiseQuestionBoxes();
  initialiseNavigation();
  const header = document.querySelector(".site-header");
  const updateHeader = () => {
    if (header) header.classList.toggle("is-scrolled", scrollY > 24);
  };
  addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  document.addEventListener("visibilitychange", () => {
    document.documentElement.classList.toggle("page-hidden", document.hidden);
  });
})();
