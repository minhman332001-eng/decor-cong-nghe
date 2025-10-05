// ======================
// 1. Menu toggle (mobile)
// ======================
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

// ======================
// 2. Cuộn lên đầu khi mở bài
// ======================
window.scrollTo({ top: 0, behavior: "smooth" });
