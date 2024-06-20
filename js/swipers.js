document.addEventListener("DOMContentLoaded", (event) => {
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

// if (document.querySelector(".swiper-container")) {
//   var swiper = new Swiper(".swiper-container", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
// }
