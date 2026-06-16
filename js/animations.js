document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll(
    ".animate-fade-up, .section-title, .luxury-card, .feature-luxury-card, .srv-lux-card, .gal-lux-card, .review-card, .team-lux-card, .contact-box, .oob-360-block",
  );

  elementsToAnimate.forEach((el) => {
    if (!el.classList.contains("animate-fade-up")) {
      el.classList.add("animate-fade-up");
    }
    observer.observe(el);
  });
});
