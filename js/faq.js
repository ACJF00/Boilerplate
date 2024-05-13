document.querySelectorAll("dt button").forEach((button) => {
  button.addEventListener("click", (event) => {
    // Close all dropdowns
    document.querySelectorAll("dd").forEach((dd) => {
      dd.classList.add("hidden");
      dd.classList.remove("block");
    });
    document.querySelectorAll("dt button img").forEach((img) => {
      img.classList.remove("rotate-180");
    });

    // Open the clicked dropdown
    const content = event.currentTarget.closest("dt").nextElementSibling;
    const icon = event.currentTarget.querySelector("img");
    content.classList.remove("hidden");
    content.classList.add("block");
    icon.classList.add("rotate-180");
  });
});
