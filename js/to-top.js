const btnToTop = document.querySelector("#btn-back-to-top");

window.onscroll = function () {
  if (window.scrollY > 100) {
    btnToTop.classList.remove("opacity-0");
    btnToTop.classList.add("opacity-100");
  } else {
    btnToTop.classList.remove("opacity-100");
    btnToTop.classList.add("opacity-0");
  }

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    btnToTop.style.bottom = "150px";
  } else {
    btnToTop.style.bottom = "40px";
  }
};

btnToTop.addEventListener("click", function () {
  window.scrollTo({ top: 25, behavior: "smooth" });
});
