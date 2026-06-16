document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

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

  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');

      if (btn) {
        const originalText = btn.innerText;
        btn.disabled = true;
        btn.innerText = "ОТПРАВКА...";

        setTimeout(() => {
          form.reset();
          btn.innerText = "УСПЕШНО!";
          btn.style.background = "#25D366";
          btn.style.borderColor = "#25D366";
          btn.style.color = "#fff";

          setTimeout(() => {
            btn.disabled = false;
            btn.innerText = originalText;
            btn.style.background = "";
            btn.style.borderColor = "";
            btn.style.color = "";
          }, 3000);
        }, 1000);
      }
    });
  });

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

  if (document.querySelector(".gallery-swiper")) {
    new Swiper(".gallery-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
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

  if (document.querySelector(".team-swiper")) {
    new Swiper(".team-swiper", {
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

  if (document.querySelector(".reviews-swiper")) {
    new Swiper(".reviews-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

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
        1024: { slidesPerView: 6 },
      },
    });
  }
});
