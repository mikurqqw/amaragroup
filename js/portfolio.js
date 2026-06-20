// =====================================================================
// ПАНЕЛЬ УПРАВЛЕНИЯ ПОРТФОЛИО
// Категории: 'private', 'corporate', 'brand', 'yacht'
// Тип (type): 'image' или 'video'
// =====================================================================

const portfolioProjects = [
  {
    category: "corporate",
    type: "image",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "private",
    type: "image",
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
  },
  { category: "corporate", type: "video", src: "assets/video/hero.mp4" },
  {
    category: "yacht",
    type: "image",
    src: "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "brand",
    type: "image",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "private",
    type: "image",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
  },
];

// =====================================================================
// ОСНОВНОЙ КОД (АДМИНУ НИЖЕ НИЧЕГО МЕНЯТЬ НЕ НУЖНО)
// =====================================================================

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("portfolio-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (!grid) return;

  function renderPortfolio(filter) {
    grid.innerHTML = "";
    portfolioProjects.forEach((project) => {
      if (filter === "all" || project.category === filter) {
        const item = document.createElement("div");
        item.className = "masonry-item animate-fade-up";

        if (project.type === "video") {
          item.innerHTML = `<video src="${project.src}" autoplay muted loop playsinline style="width: 100%; display: block;"></video>`;
        } else {
          item.innerHTML = `<img src="${project.src}" alt="Portfolio Project">`;
        }

        grid.appendChild(item);
      }
    });

    setTimeout(() => {
      const items = document.querySelectorAll(".masonry-item");
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("visible");
        }, index * 100);
      });
    }, 50);
  }

  renderPortfolio("all");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const filterValue = button.getAttribute("data-filter");
      renderPortfolio(filterValue);
    });
  });
});
