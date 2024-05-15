var url = window.location.href;

var navLinks = document.querySelectorAll(".navlink");

for (var i = 0; i < navLinks.length; i++) {
  if (navLinks[i].href === url) {
    navLinks[i].classList.add("link-active");
  }
}
