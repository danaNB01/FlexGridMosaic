function toggleNav() {
  const outerGrid = document.querySelector(".outer-grid-container");
  outerGrid.classList.toggle("outer-grid-container-expand");

  const nav = document.querySelector("nav");
  nav.classList.toggle("hide-nav");
}
