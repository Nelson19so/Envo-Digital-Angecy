document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("dropdown-btn").addEventListener("click", () => {
    document.getElementById("drop-down").classList.toggle("active-dropdown");
  });
});
