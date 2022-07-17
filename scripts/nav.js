const addStickyClass = (nav, navLogo) => {
  const el = navLogo;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.intersectionRatio === 0) {
        nav.classList.add("pin");
      } else if (entry.intersectionRatio === 1) {
        nav.classList.remove("pin");
      }
    },
    { threshold: [0, 1] }
  );

  observer.observe(el);
};

const initNav = () => {
  const selectors = {
    nav: ".nav",
    linkList: ".nav__link-list",
    toggle: ".nav__toggle",
    openIcon: ".nav__open-icon",
    closeIcon: ".nav__close-icon",
    navLogo: ".nav__logo",
  };

  const elements = {};
  elements.body = document.querySelector("body");
  elements.nav = elements.body.querySelector(selectors.nav);
  elements.linkList = elements.nav.querySelector(selectors.linkList);
  elements.toggle = elements.nav.querySelector(selectors.toggle);
  elements.openIcon = elements.nav.querySelector(selectors.openIcon);
  elements.closeIcon = elements.nav.querySelector(selectors.closeIcon);
  elements.navLogo = elements.nav.querySelector(selectors.navLogo);

  const bindEvents = () => {
    elements.toggle.addEventListener("click", toggle);
  };

  const toggle = () => {
    if (elements.toggle.getAttribute("aria-expanded") === "true") {
      close();
    } else {
      open();
    }
  };

  const toggleIcons = () => {
    elements.openIcon.classList.toggle("hidden");
    elements.closeIcon.classList.toggle("hidden");
  };

  const open = () => {
    elements.toggle.setAttribute("aria-expanded", "true");
    toggleIcons();
    elements.linkList.classList.remove("hidden-medium");
    setTimeout(() => {
      elements.linkList.classList.add("in");
    }, 1);
    elements.body.classList.add("scroll-lock");
  };

  const close = () => {
    elements.toggle.setAttribute("aria-expanded", "close");
    toggleIcons();
    elements.linkList.classList.add("hidden-medium");
    elements.linkList.classList.remove("in");
    elements.body.classList.remove("scroll-lock");
  };

  // const toggleStickyNav = () => {
  //   const body = document.querySelector("body");
  //   const resizeObserver = new ResizeObserver((entries) => {
  //     if (window.innerHeight > elements.nav.offsetHeight) {
  //       elements.nav.classList.add("sticky");
  //     } else {
  //       elements.nav.classList.remove("sticky");
  //     }
  //   });
  //   resizeObserver.observe(body);
  // };

  addStickyClass(elements.nav, elements.navLogo);
  // toggleStickyNav();
  bindEvents();
};;

export default initNav;
