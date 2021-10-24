const backToTop = () => {
  const backToTopEl = document.querySelector("#backToTop");
  const backToTopFlag = document.querySelector("#backToTopFlag");
  const toggleClasses = ["hidden"];

  const showButton = () => {
    // Unhide
    backToTopEl.classList.remove(...toggleClasses);

    // Add click listener
    backToTopEl.addEventListener("click", handleClick, { once: true });
  };

  const handleClick = () => {
    setTimeout(() => {
      backToTopEl.classList.add(...toggleClasses);
    }, 500);
  };

  if (window.scrollY > 2000) {
    showButton();
  }

  let observer = new IntersectionObserver((entries) => {
    const { boundingClientRect, isIntersecting } = entries[0];
    if (isIntersecting) {
      showButton();
    } else if (!isIntersecting && boundingClientRect.top > 0) {
      backToTopEl.removeEventListener("click", handleClick, { once: true });
      backToTopEl.classList.add(...toggleClasses);
    }
  });
  observer.observe(backToTopFlag);
};

export default backToTop;
