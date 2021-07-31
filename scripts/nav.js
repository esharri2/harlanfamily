const initNav = () => {
  const selectors = {
    nav: ".nav",
    linkList: ".nav__link-list",
    toggle: ".nav__toggle",
    openIcon: ".nav__open-icon",
    closeIcon: ".nav__close-icon",
  };

  const elements = {};
  elements.nav = document.querySelector(selectors.nav);
  elements.linkList = document.querySelector(selectors.linkList);
  elements.toggle = elements.nav.querySelector(selectors.toggle);
  elements.openIcon = elements.nav.querySelector(selectors.openIcon);
  elements.closeIcon = elements.nav.querySelector(selectors.closeIcon);

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
  };

  const close = () => {
    elements.toggle.setAttribute("aria-expanded", "close");
    toggleIcons();
    elements.linkList.classList.add("hidden-medium");
    elements.linkList.classList.remove("in");
  };

  bindEvents();
};

export default initNav;
