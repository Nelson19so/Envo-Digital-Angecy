document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("dropdown-btn").addEventListener("click", () => {
    document.getElementById("drop-down").classList.toggle("active-dropdown");
  });

  // Carousel
  const slider = new Splide("#my-slider", {
    type: "loop",
    gap: "1rem",

    // Desktop
    perPage: 3,
    arrows: false,
    pagination: true,

    // Tablet & Mobile
    breakpoints: {
      1024: {
        perPage: 2,
        pagination: false,
        arrows: false,
      },
      600: {
        perPage: 1,
        pagination: false,
        arrows: false,
      },
    },
  });

  slider.mount();

  // Custom arrows for mobile + tablet
  document.getElementById("nextBtn").onclick = () => slider.go(">");
  document.getElementById("prevBtn").onclick = () => slider.go("<");
});
