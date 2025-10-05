/* ======================
   1. Menu toggle (mobile)
====================== */
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

/* ===============================
   2. Slider sản phẩm bán chạy
=============================== */
const productSlider = document.getElementById("productSlider");

if (productSlider) {
  let slideIndex = 0;
  const slides = productSlider.children;
  const totalSlides = slides.length;

  // Clone slide để tạo vòng lặp mượt
  for (let i = 0; i < totalSlides; i++) {
    const clone = slides[i].cloneNode(true);
    productSlider.appendChild(clone);
  }

  function autoSlide() {
    slideIndex++;
    const slideWidth = slides[0].offsetWidth + 15; // 15px = khoảng cách gap

    productSlider.scrollTo({
      left: slideIndex * slideWidth,
      behavior: "smooth",
    });

    // Reset khi hết vòng
    if (slideIndex >= totalSlides) {
      setTimeout(() => {
        productSlider.scrollTo({ left: 0, behavior: "auto" });
        slideIndex = 0;
      }, 500);
    }
  }

  setInterval(autoSlide, 2000); // tự động trượt mỗi 2 giây
}

/* ==========================================
   3. Danh mục scroll ngang (chỉ mobile/tablet)
========================================== */
const catSlider = document.querySelector(".category-slider");

if (catSlider && window.innerWidth <= 992) {
  let isDown = false;
  let startX;
  let scrollLeft;

  catSlider.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return; // chỉ chuột trái
    isDown = true;
    startX = e.pageX;
    scrollLeft = catSlider.scrollLeft;
    catSlider.style.cursor = "grabbing";
  });

  catSlider.addEventListener("mouseup", () => {
    isDown = false;
    catSlider.style.cursor = "grab";
  });

  catSlider.addEventListener("mouseleave", () => {
    isDown = false;
    catSlider.style.cursor = "grab";
  });

  catSlider.addEventListener("mousemove", (e) => {
    if (!isDown || e.buttons !== 1) return; // chỉ khi giữ chuột trái
    e.preventDefault();
    const x = e.pageX;
    const walk = x - startX;
    catSlider.scrollLeft = scrollLeft - walk;
  });
}
