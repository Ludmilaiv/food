import Swiper, { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

const swiperInitialize = () => {
  var mySwiper = new Swiper('.swiper-container', {
    spaceBetween: 3,
    speed: 1000,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 15000,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}

export default swiperInitialize;
