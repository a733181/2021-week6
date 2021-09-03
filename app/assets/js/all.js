const mySwiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  slidesPerColumn: 3,
  spaceBetween: 30,
  slidesPerColumnFill: "row",
  breakpoints: {
    768: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 30,
    },
    960: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3.5,
      slidesPerColumn: 1,
      spaceBetween: 30,
    },
  },
});
