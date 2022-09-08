const burgerMenu = document.querySelector('.header-burger');
const navMenu = document.querySelector('.nav');
const body = document.querySelector('.page-body');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('header-burger--active')
  navMenu.classList.toggle('nav--active')
  body.classList.toggle('lock')
})
