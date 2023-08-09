const menuContainer = document.querySelector(".menuContainer");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".menu-bar");

closeMenu.addEventListener("click", () => {
  menuContainer.style.transition = "1s";
  menuContainer.style.transform = "translateY(-200%)";
});

openMenu.addEventListener("click", () => {
  menuContainer.style.transition = "0.5s";
  menuContainer.style.transform = "translateY(0)";
});

// get unique link id
const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");
const link4 = document.querySelector(".link4");
const link5 = document.querySelector(".link5");


link1.addEventListener("click", () => {
  menuContainer.style.transition = "0.5s";
  menuContainer.style.transform = "translateY(-200%)";
});

link2.addEventListener("click", () => {
  menuContainer.style.transition = "0.5s";
  menuContainer.style.transform = "translateY(-200%)";
});

link3.addEventListener("click", () => {
  menuContainer.style.transition = "0.5s";
  menuContainer.style.transform = "translateY(-200%)";
});

link4.addEventListener("click", () => {
  menuContainer.style.transition = "0.5s";
  menuContainer.style.transform = "translateY(-200%)";
});

link5.addEventListener("click", () => {
  menuContainer.style.transition = "0.5s";
  menuContainer.style.transform = "translateY(-200%)";
});
