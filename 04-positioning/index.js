const hamburgerMenu = document.querySelector("#hamburgerMenu");
const dropdownMenu = document.querySelector("#dropdownMenu");

hamburgerMenu.addEventListener("click", () => {
  const isOpen = dropdownMenu.classList.toggle("is-open");
  hamburgerMenu.setAttribute("aria-expanded", isOpen);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (dropdownMenu.classList.contains("is-open")) {
      dropdownMenu.classList.remove("is-open");
      hamburgerMenu.setAttribute("aria-expanded", false);
      hamburgerMenu.focus();
    }
  }
});
