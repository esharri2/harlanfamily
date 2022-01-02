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

  const focusUnloadTrigger = () => {
    elements.unloadTrigger.focus();
  };

  const loadModal = (source) => {
    const contentForModal = source.innerHTML;
    elements.contentContainer.insertAdjacentHTML("beforeend", contentForModal);
    elements.modal.classList.remove("hidden");
    elements.body.classList.add("scroll-lock");

    focusUnloadTrigger();
    elements.unloadTrigger.addEventListener("blur", focusUnloadTrigger);

    elements.modal.addEventListener(
      "click",
      () => {
        unloadModal();
      },
      { once: true }
    );
  };

  const unloadModal = () => {
    elements.unloadTrigger.removeEventListener("blur", focusUnloadTrigger);
    elements.modal.classList.add("hidden");
    elements.contentContainer.innerHTML = "";
    elements.body.classList.remove("scroll-lock");
  };

  bindEvents();
};;

export default initModals;
