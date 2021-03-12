'use strict';

// ПЕРЕИСПОЛЬЗУЕМЫЕ ФУНКЦИИ
// СЛАЙДЕР
// (function () {
//
//   let sliderReviews = document.querySelector('.reviews__slider');
//   let mainPrevButton = document.querySelector('.reviews__btn--next');
//   let mainNextButton = document.querySelector('.reviews__btn--prev');
//
//   if (!sliderReviews) {
//     return;
//   }
//
//   let swiper = new Swiper(sliderReviews, {
//     slidesPerView: 1,
//     spaceBetween: 355,
//     // slidesPerGroup: 1,
//     loop: false,
//     direction: 'horizontal',
//
//     navigation: {
//       nextEl: mainPrevButton,
//       prevEl: mainNextButton,
//     },
//
//     breakpoints: {
//       // when window width is >= 1024px
//       1024: {
//         slidesPerView: 1,
//         spaceBetween: 110,
//       },
//
//       // 768: {
//       //   slidesPerView: 2,
//       //   spaceBetween: 50,
//       // },
//
//       // 320: {
//       //   slidesPerView: 1,
//       //   spaceBetween: 80,
//       // },
//     }
//   });
//
//   mainNextButton.addEventListener('click', function (e) {
//     e.preventDefault();
//     swiper.slideNext();
//   });
//
//   mainPrevButton.addEventListener('click', function (e) {
//     e.preventDefault();
//     swiper.slidePrev();
//   });
//
//   window.onload = function () {
//     swiper.update();
//   };
//
//   window.addEventListener('onorientationchange', function () {
//     swiper.update();
//   });
// })();
