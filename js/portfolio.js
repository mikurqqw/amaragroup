document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("portfolio-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (!grid) return;

  const projects = [
    {
      category: "corporate",
      img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    },
    {
      category: "private",
      img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
    },
    {
      category: "brand",
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    },
    {
      category: "yacht",
      img: "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=800&auto=format&fit=crop",
    },
    {
      category: "private",
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
    },
    {
      category: "corporate",
      img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop",
    },
  ];

  function renderPortfolio(filter) {
    grid.innerHTML = "";
    projects.forEach((project) => {
      if (filter === "all" || project.category === filter) {
        const item = document.createElement("div");
        item.className = "masonry-item animate-fade-up";
        item.innerHTML = `<img src="${project.img}" alt="Project">`;
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
