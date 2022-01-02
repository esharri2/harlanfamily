const classes = {
  cancel: "button[type='reset']",
  component: ".messages__post-form",
  form: "#post-form",
  disclosureOpen: "[aria-controls='post-form']",
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
  };

  const toggleForm = (open) => {
    const classListAction = open ? "remove" : "add";
    disclosureOpen.setAttribute("aria-expanded", !!open);
    form.classList[classListAction]("hidden");
  };

  // Calls
  bindEvents();
}
