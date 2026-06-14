document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const logoWhite = document.querySelector(".logo-white");
  const logoDark = document.querySelector(".logo-dark");
  const hamburger = document.querySelector(".hamburger");
  const isAlwaysScrolled = navbar.classList.contains("scrolled");

  window.addEventListener("scroll", () => {
    if (!isAlwaysScrolled) {
      if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
        if (logoWhite) logoWhite.classList.add("hidden");
        if (logoDark) logoDark.classList.remove("hidden");
        hamburger.style.color = "#3D1F0D";
      } else {
        navbar.classList.remove("scrolled");
        if (logoWhite) logoWhite.classList.remove("hidden");
        if (logoDark) logoDark.classList.add("hidden");
        hamburger.style.color = "#FFFFFF";
      }
    }
  });

  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-links a");

  hamburger.addEventListener("click", () => mobileMenu.classList.add("active"));
  closeBtn.addEventListener("click", () =>
    mobileMenu.classList.remove("active"),
  );
  mobileLinks.forEach((link) =>
    link.addEventListener("click", () => mobileMenu.classList.remove("active")),
  );

  document.querySelectorAll(".event-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const successMsg = form.querySelector(".form-success");
      btn.disabled = true;
      setTimeout(() => {
        form.reset();
        btn.disabled = false;
        successMsg.classList.remove("hidden");
        setTimeout(() => successMsg.classList.add("hidden"), 5000);
      }, 1000);
    });
  });
});
