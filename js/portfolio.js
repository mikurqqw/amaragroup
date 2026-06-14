document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("portfolio-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  // 1. Загружаем фотки из JSON (который будет редактировать CMS)
  fetch("js/portfolio-data.json")
    .then((response) => response.json())
    .then((data) => {
      grid.innerHTML = ""; // Очищаем старые статичные картинки из HTML

      // 2. Рисуем загруженные картинки
      data.projects.forEach((project) => {
        const item = document.createElement("div");
        item.className = "masonry-item portfolio-item";
        item.setAttribute("data-category", project.category);

        // Добавляем эффект появления
        item.style.opacity = "0";
        item.innerHTML = `<img src="${project.image}" alt="${project.alt}">`;
        grid.appendChild(item);

        // Плавное появление после рендера
        setTimeout(() => (item.style.opacity = "1"), 100);
      });

      // 3. Включаем фильтры (как было раньше)
      initializeFilters();
    })
    .catch((err) => console.error("Ошибка загрузки портфолио:", err));

  function initializeFilters() {
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.getAttribute("data-filter");

        portfolioItems.forEach((item) => {
          const itemCategory = item.getAttribute("data-category");
          item.style.opacity = "0";
          item.style.transform = "scale(0.95)";

          setTimeout(() => {
            if (filterValue === "all" || filterValue === itemCategory) {
              item.classList.remove("hide");
              setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "scale(1)";
              }, 50);
            } else {
              item.classList.add("hide");
            }
          }, 300);
        });
      });
    });
  }
});
