// =====================================================================
// ПАНЕЛЬ УПРАВЛЕНИЯ АДМИНИСТРАТОРА (ДИНАМИЧЕСКИЕ ДАННЫЕ)
// Вписывайте текст сразу на 3 языках: ru, en, ar
// =====================================================================

const sitePartners = [
  { img: "https://www.amaraevent.com/nestle_new_logo_2.png", name: "Nestle" },
  { img: "https://www.amaraevent.com/loreal_new__logo_2.png", name: "Loreal" },
  { img: "https://www.amaraevent.com/kaspi_new_logo_2.png", name: "Kaspi" },
  { name: "BCC.kz" },
  { name: "Coca-Cola" },
  { name: "JUSAN" },
  { name: "Qatar Airways" },
];

const siteTeam = [
  {
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    name: {
      ru: "Александр Иванов",
      en: "Alexander Ivanov",
      ar: "ألكسندر إيفانوف",
    },
    position: {
      ru: "CEO & Founder",
      en: "CEO & Founder",
      ar: "الرئيس التنفيذي والمؤسس",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    name: { ru: "Елена Смирнова", en: "Elena Smirnova", ar: "إيلينا سميرنوفا" },
    position: {
      ru: "Head of Production",
      en: "Head of Production",
      ar: "رئيس الإنتاج",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    name: { ru: "Дмитрий Волков", en: "Dmitry Volkov", ar: "ديمتري فولكوف" },
    position: { ru: "Art Director", en: "Art Director", ar: "مدير فني" },
  },
  {
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    name: { ru: "Мария Ким", en: "Maria Kim", ar: "ماريا كيم" },
    position: {
      ru: "Event Manager",
      en: "Event Manager",
      ar: "مدير الفعاليات",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    name: { ru: "Тимур Оспанов", en: "Timur Ospanov", ar: "تيمور أوسبانوف" },
    position: {
      ru: "Technical Director",
      en: "Technical Director",
      ar: "المدير الفني",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    name: { ru: "Анна Лебедева", en: "Anna Lebedeva", ar: "آنا ليبيديفا" },
    position: { ru: "Creative Lead", en: "Creative Lead", ar: "قائد إبداعي" },
  },
];

const siteReviews = [
  {
    rating: 5,
    text: {
      ru: "Организация на высшем уровне. Каждая деталь была продумана до мелочей. Это был истинный премиум-опыт.",
      en: "Top-level organization. Every detail was thought out. A true premium experience.",
      ar: "تنظيم على أعلى مستوى. تم التفكير في كل التفاصيل. تجربة مميزة حقًا.",
    },
    author: {
      ru: "CEO, Международная корпорация",
      en: "CEO, International Corporation",
      ar: "مدير تنفيذي، شركة دولية",
    },
  },
  {
    rating: 5,
    text: {
      ru: "Невероятное внимание к деталям и потрясающий вкус команды. Наша свадьба стала событием года.",
      en: "Incredible attention to detail. Our wedding was the event of the year.",
      ar: "اهتمام لا يُصدق بالتفاصيل. كان زفافنا حدث العام.",
    },
    author: {
      ru: "VIP Клиент, Дубай",
      en: "VIP Client, Dubai",
      ar: "عميل VIP، دبي",
    },
  },
  {
    rating: 4,
    text: {
      ru: "Превосходный сервис и полная конфиденциальность. Мы доверяем свои мероприятия только Amara Group.",
      en: "Excellent service and complete confidentiality. We only trust Amara Group.",
      ar: "خدمة ممتازة وسرية تامة. نثق فقط بمجموعة أمارا.",
    },
    author: {
      ru: "Генеральный директор, Катар",
      en: "General Director, Qatar",
      ar: "مدير عام، قطر",
    },
  },
];

const siteWhatWeDo = [
  {
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    title: {
      ru: "Корпоративные мероприятия",
      en: "Corporate Events",
      ar: "فعاليات الشركات",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
    title: {
      ru: "Организация свадьбы",
      en: "Wedding Organization",
      ar: "تنظيم حفلات الزفاف",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=800&auto=format&fit=crop",
    title: { ru: "Тимбилдинги", en: "Team Building", ar: "بناء فريق" },
  },
  {
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop",
    title: { ru: "Дни рождения", en: "Birthdays", ar: "أعياد ميلاد" },
  },
  {
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
    title: {
      ru: "Тематические вечеринки",
      en: "Theme Parties",
      ar: "حفلات ذات طابع خاص",
    },
  },
];

const catalogCardText = {
  ru: "СМОТРЕТЬ КАТАЛОГ МЕРОПРИЯТИЙ",
  en: "VIEW EVENT CATALOG",
  ar: "عرض كتالوج الفعاليات",
};

const siteGallery = [
  "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=800&auto=format&fit=crop",
];

const siteServices = [
  {
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
    title: { ru: "Шоу-программа", en: "Show Program", ar: "برنامج العروض" },
  },
  {
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
    title: {
      ru: "Фото- видео съемка",
      en: "Photo & Video",
      ar: "تصوير فيديو وفوتوغرافي",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    title: { ru: "Место проведения", en: "Venue", ar: "المكان" },
  },
  {
    img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=800&auto=format&fit=crop",
    title: { ru: "Ведущие", en: "Hosts", ar: "مقدمون" },
  },
];

document.addEventListener("DOMContentLoaded", () => {
  let currentLang = localStorage.getItem("lang") || "ru";
  let swiperInstances = [];

  function renderStars(rating) {
    let starsHTML = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) starsHTML += '<i class="fas fa-star"></i>';
      else starsHTML += '<i class="far fa-star"></i>';
    }
    return starsHTML;
  }

  function renderDynamicContent() {
    const wwdGrid = document.getElementById("dynamic-what-we-do");
    if (wwdGrid) {
      wwdGrid.innerHTML = "";
      siteWhatWeDo.forEach((item) => {
        wwdGrid.innerHTML += `
                    <a href="services.html" class="luxury-card">
                        <div class="luxury-card-img" style="background-image: url('${item.img}');"></div>
                        <div class="luxury-card-overlay"></div>
                        <div class="luxury-card-content">
                            <h3>${item.title[currentLang] || item.title["ru"]}</h3>
                        </div>
                    </a>
                `;
      });
      wwdGrid.innerHTML += `
                <a href="portfolio.html" class="luxury-card text-only-card">
                    <div class="luxury-card-content centered-content">
                        <h3 class="gold-text">${catalogCardText[currentLang] || catalogCardText["ru"]}</h3>
                        <div class="luxury-arrow"><i class="fas fa-arrow-right"></i></div>
                    </div>
                </a>
            `;
    }

    const galleryGrid = document.getElementById("dynamic-gallery");
    if (galleryGrid) {
      galleryGrid.innerHTML = "";
      siteGallery.forEach((img) => {
        galleryGrid.innerHTML += `
                    <div class="swiper-slide gal-lux-card">
                        <img src="${img}" alt="Project">
                    </div>
                `;
      });
    }

    const servicesGrid = document.getElementById("dynamic-services");
    if (servicesGrid) {
      servicesGrid.innerHTML = "";
      siteServices.forEach((srv) => {
        servicesGrid.innerHTML += `
                    <div class="swiper-slide srv-lux-card">
                        <img src="${srv.img}" alt="${srv.title["en"]}">
                        <div class="srv-lux-content">
                            <h3>${srv.title[currentLang] || srv.title["ru"]}</h3>
                        </div>
                    </div>
                `;
      });
    }

    const partnersGrid = document.getElementById("dynamic-partners");
    if (partnersGrid) {
      partnersGrid.innerHTML = "";
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

    const teamGrid = document.getElementById("dynamic-team");
    if (teamGrid) {
      teamGrid.innerHTML = "";
      siteTeam.forEach((t) => {
        teamGrid.innerHTML += `
                    <div class="swiper-slide team-lux-card">
                        <div class="team-lux-img" style="background-image: url('${t.img}'); border-radius: 50%; aspect-ratio: 1/1; height: auto; max-width: 250px; margin: 0 auto 2rem; background-size: cover; background-position: center; filter: grayscale(100%); transition: filter 0.5s ease; box-shadow: var(--shadow);"></div>
                        <h4 style="font-size: 1.5rem; margin-bottom: 0.5rem; font-family: var(--font-heading); font-weight: 600;">${t.name[currentLang] || t.name["ru"]}</h4>
                        <p class="gold-text" style="font-size: 0.85rem; letter-spacing: 1px; text-transform: uppercase; font-weight: 600;">${t.position[currentLang] || t.position["ru"]}</p>
                    </div>
                `;
      });
    }

    const reviewsGrid = document.getElementById("dynamic-reviews");
    if (reviewsGrid) {
      reviewsGrid.innerHTML = "";
      siteReviews.forEach((r) => {
        reviewsGrid.innerHTML += `
                    <div class="swiper-slide review-card">
                        <div class="review-quote"><i class="fas fa-quote-left"></i></div>
                        <div class="rating gold-text" style="margin-bottom: 1.5rem; font-size: 1.2rem; letter-spacing: 3px;">
                            ${renderStars(r.rating)}
                        </div>
                        <p class="review-text">${r.text[currentLang] || r.text["ru"]}</p>
                        <h4 class="review-author">${r.author[currentLang] || r.author["ru"]}</h4>
                    </div>
                `;
      });
    }

    initSwipers();
  }

  function initSwipers() {
    swiperInstances.forEach((swiper) => swiper.destroy(true, true));
    swiperInstances = [];

    const dir = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);

    if (document.querySelector(".services-swiper")) {
      swiperInstances.push(
        new Swiper(".services-swiper", {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: false,
          pagination: { el: ".swiper-pagination", clickable: true },
          breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          },
        }),
      );
    }

    if (document.querySelector(".gallery-swiper")) {
      swiperInstances.push(
        new Swiper(".gallery-swiper", {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          pagination: { el: ".swiper-pagination", clickable: true },
          breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          },
        }),
      );
    }

    if (document.querySelector(".team-swiper")) {
      swiperInstances.push(
        new Swiper(".team-swiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: false,
          pagination: { el: ".swiper-pagination", clickable: true },
          breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          },
        }),
      );
    }

    if (document.querySelector(".reviews-swiper")) {
      swiperInstances.push(
        new Swiper(".reviews-swiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: { el: ".swiper-pagination", clickable: true },
        }),
      );
    }

    if (document.querySelector(".clients-swiper")) {
      swiperInstances.push(
        new Swiper(".clients-swiper", {
          slidesPerView: 2,
          spaceBetween: 20,
          loop: true,
          autoplay: { delay: 2000, disableOnInteraction: false },
          breakpoints: {
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          },
        }),
      );
    }
  }

  const langSelects = document.querySelectorAll(".lang-select");
  langSelects.forEach((select) => {
    select.value = currentLang;
    select.addEventListener("change", (e) => {
      currentLang = e.target.value;
      localStorage.setItem("lang", currentLang);
      renderDynamicContent();
    });
  });

  renderDynamicContent();

  const reviewForm = document.getElementById("submit-review-form");
  if (reviewForm) {
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = reviewForm.querySelector("button");
      const successMsg = reviewForm.querySelector(".form-success");
      const originalText = btn.innerText;

      btn.disabled = true;
      btn.innerText = "ОТПРАВКА...";

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
});
