document.addEventListener("DOMContentLoaded", () => {
  const langSelects = document.querySelectorAll(".lang-select");
  let currentLang = localStorage.getItem("amara_lang") || "ru";

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("amara_lang", lang);

    langSelects.forEach((select) => (select.value = lang));

    if (lang === "ar") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = lang;
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = translations[lang][key];
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });
  }

  langSelects.forEach((select) => {
    select.addEventListener("change", (e) => applyLanguage(e.target.value));
  });

  applyLanguage(currentLang);
});
