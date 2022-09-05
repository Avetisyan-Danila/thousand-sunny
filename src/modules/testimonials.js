import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

const swiper = new Swiper('.swiper--testimonials', {
  spaceBetween: 60,
  navigation: {
    nextEl: '.swiper--testimonials .swiper-button--next',
    prevEl: '.swiper--testimonials .swiper-button--prev',
  },
})
