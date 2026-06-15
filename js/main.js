document.addEventListener("DOMContentLoaded", () => {
  // 1. Навигация и скролл
  const navbar = document.querySelector(".navbar");
  const isAlwaysScrolled = navbar.classList.contains("scrolled");

  window.addEventListener("scroll", () => {
    if (!isAlwaysScrolled) {
      if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
        navbar.style.background = "rgba(10, 10, 10, 0.95)";
      } else {
        navbar.classList.remove("scrolled");
        navbar.style.background = "rgba(10, 10, 10, 0.5)";
      }
    }
  });

  // 2. Мобильное меню
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close-menu");
  const hamburger = document.querySelector(".hamburger");
  const mobileLinks = document.querySelectorAll(".mobile-nav-links a");

  if (hamburger)
    hamburger.addEventListener("click", () =>
      mobileMenu.classList.add("active"),
    );
  if (closeBtn)
    closeBtn.addEventListener("click", () =>
      mobileMenu.classList.remove("active"),
    );
  mobileLinks.forEach((link) =>
    link.addEventListener("click", () => mobileMenu.classList.remove("active")),
  );

  // 3. Формы (Имитация отправки)
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      if (!form.classList.contains("newsletter-form")) {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerText;
        btn.disabled = true;
        btn.innerText = "Отправка...";

        setTimeout(() => {
          form.reset();
          btn.innerText = "Успешно!";
          btn.style.background = "#25D366";
          setTimeout(() => {
            btn.disabled = false;
            btn.innerText = originalText;
            btn.style.background = "";
          }, 3000);
        }, 1000);
      }
    });
  });

  // 4. Инициализация Swiper (Услуги)
  if (document.querySelector(".services-swiper")) {
    new Swiper(".services-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      },
    });
  }

  // 5. Инициализация Swiper (Клиенты / Логотипы)
  if (document.querySelector(".clients-swiper")) {
    new Swiper(".clients-swiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      },
    });
  }
});
