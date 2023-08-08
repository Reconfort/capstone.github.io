const menuContainer = document.querySelector('.menuContainer');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.menu-bar');

closeMenu.addEventListener('click', () => {
  menuContainer.style.transition = '1s';
  menuContainer.style.transform = 'translateY(-200%)';
});

openMenu.addEventListener('click', () => {
  menuContainer.style.transition = '0.5s';
  menuContainer.style.transform = 'translateY(0)';
});
