document.addEventListener("DOMContentLoaded", () => {
  const animClasses = [
    ".animate-from-left",
    ".animate-from-right",
    ".animate-from-bottom",
    ".animate-fade",
    ".animate-scale",
  ];
  const elements = document.querySelectorAll(animClasses.join(", "));
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: "0px", threshold: 0.15 },
  );
  elements.forEach((el) => observer.observe(el));
});
