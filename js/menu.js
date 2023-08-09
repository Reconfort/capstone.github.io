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

// get unique link id
const links1 = document.querySelector('.link1');
const links2 = document.querySelector('.link2');
const links3 = document.querySelector('.link3');
const links4 = document.querySelector('.link4');
const links5 = document.querySelector('.link5');

links1.addEventListener('click', () => {
  menuContainer.style.transition = '0.5s';
  menuContainer.style.transform = 'translateY(-200%)';
});

links2.addEventListener('click', () => {
  menuContainer.style.transition = '0.5s';
  menuContainer.style.transform = 'translateY(-200%)';
});

links3.addEventListener('click', () => {
  menuContainer.style.transition = '0.5s';
  menuContainer.style.transform = 'translateY(-200%)';
});

links4.addEventListener('click', () => {
  menuContainer.style.transition = '0.5s';
  menuContainer.style.transform = 'translateY(-200%)';
});

links5.addEventListener('click', () => {
  menuContainer.style.transition = '0.5s';
  menuContainer.style.transform = 'translateY(-200%)';
});
