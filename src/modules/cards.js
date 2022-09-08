import Swiper from 'swiper';

const swiper = new Swiper('.swiper--cards', {
  spaceBetween: 25,
  slidesPerView: 1,
  grabCursor: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
})
