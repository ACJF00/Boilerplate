///// CART

const sectionCart = document.querySelector("#section-cart");
const cart = document.querySelector("#cart");
const closeCart = document.querySelector("#close-cart");
const cartIcon = document.querySelector("#cart-icon");
const coupDeCoeur = document.querySelector("#coup-de-coeur");

cartIcon.addEventListener("click", () => {
  sectionCart.classList.toggle("hidden");
  cart.classList.remove("cart-close");
  cart.classList.add("cart-open");
  setTimeout(() => {
    coupDeCoeur.classList.remove("liked-products-close");
    coupDeCoeur.classList.add("liked-products-open");
  }, 300);
  document.body.classList.toggle("overflow-hidden");
});

closeCart.addEventListener("click", () => {
  coupDeCoeur.classList.remove("liked-products-open");
  coupDeCoeur.classList.add("liked-products-close");
  setTimeout(() => {
    sectionCart.classList.toggle("hidden");
    cart.classList.remove("cart-open");
    cart.classList.add("cart-close");
  }, 300);
  document.body.classList.toggle("overflow-hidden");
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 48,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  groupedSlides: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
  },
});
