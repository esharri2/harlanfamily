const backToTop = () => {
  const backToTopEl = document.querySelector("#backToTop");
  const backToTopFlag = document.querySelector("#backToTopFlag");
  const toggleClasses = ["hidden"];

  const handleClick = () => {
    setTimeout(() => {
      backToTopEl.classList.add(...toggleClasses);
    }, 500);
  };

  let observer = new IntersectionObserver((entries) => {
    const { boundingClientRect, isIntersecting } = entries[0];
    if (isIntersecting) {
      // Unhide
      backToTopEl.classList.remove(...toggleClasses);

      // Add click listener
      backToTopEl.addEventListener("click", handleClick, { once: true });
    } else if (!isIntersecting && boundingClientRect.top > 0) {
      backToTopEl.removeEventListener("click", handleClick, { once: true });
      backToTopEl.classList.add(...toggleClasses);
    }
  });
  observer.observe(backToTopFlag);
};

export default backToTop;
