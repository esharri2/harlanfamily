const initModals = () => {
  const selectors = {
    source: "[data-modal]",
    unloadTrigger: ".modal__close",
    loadTrigger: "[data-modal-trigger]",
    modal: ".modal",
    contentContainer: ".modal__content",
  };

  const elements = {};
  elements.body = document.querySelector("body");
  elements.modal = document.querySelector(selectors.modal);
  elements.unloadTrigger = elements.modal.querySelector(
    selectors.unloadTrigger
  );
  elements.contentContainer = elements.modal.querySelector(
    selectors.contentContainer
  );
  elements.sources = document.querySelectorAll(selectors.source);

  const bindEvents = () => {
    elements.sources.forEach((source) => {
      const trigger = source.querySelector(selectors.loadTrigger);
      if (!trigger) {
        return;
      }
      trigger.addEventListener("click", () => {
        loadModal(source);
      });
    });
  };

  const loadModal = (source) => {
    const contentForModal = source.innerHTML;
    elements.contentContainer.insertAdjacentHTML("beforeend", contentForModal);
    elements.modal.classList.remove("hidden");
    elements.body.classList.add("scroll-lock");

    elements.unloadTrigger.addEventListener(
      "click",
      () => {
        unloadModal();
      },
      { once: true }
    );
  };

  const unloadModal = () => {
    debugger;
    elements.modal.classList.add("hidden");
    elements.contentContainer.innerHTML = "";
    elements.body.classList.remove("scroll-lock");
  };

  bindEvents();
};

export default initModals;