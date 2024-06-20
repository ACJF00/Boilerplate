///// CART

const sectionCart = document.querySelector("#section-cart");
const cart = document.querySelector("#cart");
const closeCart = document.querySelector("#close-cart");
const cartIcon = document.querySelector("#cart-icon");
const coupDeCoeur = document.querySelector("#coup-de-coeur");

if (cartIcon) {
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

  document.addEventListener("click", function (event) {
    var isClickInsideCart = cart.contains(event.target);
    var isClickInsideLikedProducts = coupDeCoeur.contains(event.target);
    var isClickOnCartIcon = cartIcon.contains(event.target);

    if (
      !isClickInsideCart &&
      !isClickInsideLikedProducts &&
      !isClickOnCartIcon
    ) {
      // L'utilisateur a cliqué en dehors du panier et des produits aimés, fermez le panier et les produits aimés
      if (!cart.classList.contains("cart-close")) {
        coupDeCoeur.classList.remove("liked-products-open");
        coupDeCoeur.classList.add("liked-products-close");
        setTimeout(() => {
          sectionCart.classList.toggle("hidden");
          cart.classList.remove("cart-open");
          cart.classList.add("cart-close");
        }, 300);
        document.body.classList.toggle("overflow-hidden");
      }

      if (coupDeCoeur.classList.contains("liked-products-open")) {
        // L'utilisateur a cliqué en dehors des produits aimés, fermez les produits aimés
        coupDeCoeur.classList.remove("liked-products-open");
        coupDeCoeur.classList.add("liked-products-close");
      }
    }
  });
}
