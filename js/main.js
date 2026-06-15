document.addEventListener("DOMContentLoaded", () => {
  // 1. Навигация при скролле
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // 2. Мобильное меню
  const mobileMenu = document.querySelector(".mobile-menu");
  const hamburger = document.querySelector(".hamburger");
  const closeBtn = document.querySelector(".close-menu");
  const links = document.querySelectorAll(".mobile-nav-links a");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.add("active");
    });
  }

  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu) mobileMenu.classList.remove("active");
    });
  });

  // 3. Формы (Имитация отправки и анимация кнопки)
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');

      if (btn) {
        const originalText = btn.innerText;
        btn.disabled = true;
        btn.innerText = "Отправка...";

        setTimeout(() => {
          form.reset();
          btn.innerText = "Успешно!";
          btn.style.background = "#25D366"; // Зеленый цвет WhatsApp для успеха

          // Показ сообщения об успехе (если есть на странице контактов)
          const successMsg = form.parentElement.querySelector(".form-success");
          if (successMsg) {
            successMsg.classList.remove("hidden");
            setTimeout(() => successMsg.classList.add("hidden"), 5000);
          }

          // Возврат кнопки в исходное состояние
          setTimeout(() => {
            btn.disabled = false;
            btn.innerText = originalText;
            btn.style.background = ""; // Возвращаем градиент из CSS
          }, 3000);
        }, 1000);
      }
    });
  });

  // 4. Слайдер "Наши услуги" (С точками внизу)
  if (document.querySelector(".services-swiper")) {
    new Swiper(".services-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      },
    });
  }

  // 5. Слайдер "Нам доверяют" (Бесконечная автопрокрутка логотипов)
  if (document.querySelector(".clients-swiper")) {
    new Swiper(".clients-swiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      },
    });
  }
});
