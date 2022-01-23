import { postMessage } from "../utils/fetchers";

const classes = {
  cancel: "button[type='reset']",
  component: ".messages__post-form",
  form: "#post-form",
  disclosureOpen: '[aria-controls="post-form"]',
};

const component = document.querySelector(classes.component);

export default function initPostMessage() {
  if (!component) {
    return;
  }

  // Elements
  const cancel = component.querySelector(classes.cancel);
  const disclosureOpen = component.querySelector(classes.disclosureOpen);
  const form = component.querySelector(classes.form);

  // Functions
  const bindEvents = () => {
    cancel.addEventListener("click", () => {
      toggleForm();
    });
    disclosureOpen.addEventListener("click", () => {
      toggleForm(true);
    });
    form.addEventListener("submit", handleMessageSubmit);
  };

  const toggleForm = (open) => {
    disclosureOpen.setAttribute("aria-expanded", !!open);
    disclosureOpen.classList.toggle("hidden");
    form.classList.toggle("hidden");
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    postMessage(
      formData.get("name"),
      formData.get("email"),
      formData.get("message")
    );
  };

  // Calls
  bindEvents();
}
