import Swiper from 'swiper';

const swiper = new Swiper('.swiper--cards', {
  spaceBetween: 25,
  slidesPerView: 1,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper--cards .swiper-button--next',
    prevEl: '.swiper--cards .swiper-button--prev',
  },
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
