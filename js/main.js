// =====================================================================
// ПАНЕЛЬ УПРАВЛЕНИЯ АДМИНИСТРАТОРА (ДАННЫЕ ДЛЯ САЙТА)
// =====================================================================

// 1. ПАРТНЕРЫ (Нам доверяют)
// Просто вставляйте ссылки на логотипы. Сайт сам подстроит их под один размер.
const sitePartners = [
  { img: "https://www.amaraevent.com/nestle_new_logo_2.png", name: "Nestle" },
  { img: "https://www.amaraevent.com/loreal_new__logo_2.png", name: "Loreal" },
  { img: "https://www.amaraevent.com/kaspi_new_logo_2.png", name: "Kaspi" },
  { name: "BCC.kz" }, // Если картинки нет, можно оставить просто текст
  { name: "Coca-Cola" },
  { name: "JUSAN" },
  { name: "Qatar Airways" },
];

// 2. НАША КОМАНДА (6 человек, фото будут круглыми автоматически)
const siteTeam = [
  {
    name: "Александр Иванов",
    position: "CEO & Founder",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Елена Смирнова",
    position: "Head of Production",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Дмитрий Волков",
    position: "Art Director",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Мария Ким",
    position: "Event Manager",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Тимур Оспанов",
    position: "Technical Director",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Анна Лебедева",
    position: "Creative Lead",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  },
];

// 3. ОТЗЫВЫ КЛИЕНТОВ (Рейтинг от 1 до 10)
const siteReviews = [
  {
    rating: 10,
    text: "Организация на высшем уровне. Каждая деталь была продумана до мелочей. Это был истинный премиум-опыт.",
    author: "CEO, Международная корпорация",
  },
  {
    rating: 10,
    text: "Невероятное внимание к деталям и потрясающий вкус команды. Наша свадьба стала событием года.",
    author: "VIP Клиент, Дубай",
  },
  {
    rating: 9,
    text: "Превосходный сервис и полная конфиденциальность. Мы доверяем свои мероприятия только Amara Group.",
    author: "Генеральный директор, Катар",
  },
];

// =====================================================================
// ОСНОВНОЙ КОД САЙТА (АДМИНУ НИЖЕ НИЧЕГО МЕНЯТЬ НЕ НУЖНО)
// =====================================================================

document.addEventListener("DOMContentLoaded", () => {
  // --- Генерация Партнеров ---
  const partnersGrid = document.getElementById("dynamic-partners");
  if (partnersGrid) {
    sitePartners.forEach((p) => {
      let content = p.img
        ? `<img src="${p.img}" alt="${p.name}" style="max-width: 100%; max-height: 80px; object-fit: contain; filter: grayscale(100%) opacity(0.5); transition: all 0.4s ease; cursor: pointer;">`
        : `<span class="logo-text" style="font-family: var(--font-heading); font-size: 1.5rem; color: rgba(0,0,0,0.3); font-weight: 600; transition: color 0.4s; cursor: pointer;">${p.name}</span>`;

      partnersGrid.innerHTML += `
                <div class="swiper-slide client-logo" style="height: 100px; display: flex; align-items: center; justify-content: center;" 
                     onmouseover="const img=this.querySelector('img'); const span=this.querySelector('span'); if(img){img.style.filter='grayscale(0%) opacity(1)';} if(span){span.style.color='var(--accent-gold)';}" 
                     onmouseout="const img=this.querySelector('img'); const span=this.querySelector('span'); if(img){img.style.filter='grayscale(100%) opacity(0.5)';} if(span){span.style.color='rgba(0,0,0,0.3)';}">
                    ${content}
                </div>
            `;
    });
  }

  // --- Генерация Команды ---
  const teamGrid = document.getElementById("dynamic-team");
  if (teamGrid) {
    siteTeam.forEach((t) => {
      teamGrid.innerHTML += `
                <div class="swiper-slide team-lux-card">
                    <div class="team-lux-img animate-fade-up" style="background-image: url('${t.img}'); border-radius: 50%; aspect-ratio: 1/1; height: auto; max-width: 250px; margin: 0 auto 2rem; background-size: cover; background-position: center; filter: grayscale(100%); transition: filter 0.5s ease; box-shadow: var(--shadow);"></div>
                    <h4 style="font-size: 1.5rem; margin-bottom: 0.5rem; font-family: var(--font-heading); font-weight: 600;">${t.name}</h4>
                    <p class="gold-text" style="font-size: 0.85rem; letter-spacing: 1px; text-transform: uppercase; font-weight: 600;">${t.position}</p>
                </div>
            `;
    });
  }

  // --- Генерация Отзывов ---
  const reviewsGrid = document.getElementById("dynamic-reviews");
  if (reviewsGrid) {
    siteReviews.forEach((r) => {
      reviewsGrid.innerHTML += `
                <div class="swiper-slide review-card animate-fade-up">
                    <div class="review-quote"><i class="fas fa-quote-left"></i></div>
                    <div class="rating gold-text" style="margin-bottom: 1.5rem; font-size: 1.1rem; font-weight: 600;">
                        Оценка: ${r.rating}/10 <i class="fas fa-star" style="font-size: 1rem; margin-bottom: 2px;"></i>
                    </div>
                    <p class="review-text">${r.text}</p>
                    <h4 class="review-author">${r.author}</h4>
                </div>
            `;
    });
  }

  // --- Логика формы отправки отзыва (с модерацией) ---
  const reviewForm = document.getElementById("submit-review-form");
  if (reviewForm) {
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = reviewForm.querySelector("button");
      const successMsg = reviewForm.querySelector(".form-success");
      const originalText = btn.innerText;

      btn.disabled = true;
      btn.innerText = "ОТПРАВКА...";

      // Имитация отправки данных администратору
      setTimeout(() => {
        reviewForm.reset();
        btn.style.display = "none";
        successMsg.style.display = "block";

        setTimeout(() => {
          btn.style.display = "block";
          btn.disabled = false;
          btn.innerText = originalText;
          successMsg.style.display = "none";
        }, 6000);
      }, 1000);
    });
  }

  // --- Навигация и хедер ---
  const header = document.getElementById("header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    });
  }

  const mobileMenu = document.querySelector(".mobile-menu");
  const hamburger = document.querySelector(".hamburger");
  const closeBtn = document.querySelector(".close-menu");
  const links = document.querySelectorAll(".mobile-nav-links a");

  if (hamburger && mobileMenu)
    hamburger.addEventListener("click", () =>
      mobileMenu.classList.add("active"),
    );
  if (closeBtn && mobileMenu)
    closeBtn.addEventListener("click", () =>
      mobileMenu.classList.remove("active"),
    );
  links.forEach((link) =>
    link.addEventListener("click", () => {
      if (mobileMenu) mobileMenu.classList.remove("active");
    }),
  );

  // --- Инициализация слайдеров Swiper (запускается ПОСЛЕ генерации данных) ---
  if (document.querySelector(".services-swiper")) {
    new Swiper(".services-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: false,
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } },
    });
  }

  if (document.querySelector(".gallery-swiper")) {
    new Swiper(".gallery-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } },
    });
  }

  if (document.querySelector(".team-swiper")) {
    new Swiper(".team-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } },
    });
  }

  if (document.querySelector(".reviews-swiper")) {
    new Swiper(".reviews-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: { el: ".swiper-pagination", clickable: true },
    });
  }

  if (document.querySelector(".clients-swiper")) {
    new Swiper(".clients-swiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      autoplay: { delay: 2000, disableOnInteraction: false },
      breakpoints: { 640: { slidesPerView: 3 }, 1024: { slidesPerView: 6 } },
    });
  }
});
