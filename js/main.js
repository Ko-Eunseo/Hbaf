
// 600px 이하 일때 advertice => mainpage
// $(window).resize(function(){
//   if (window.innerWidth < 601) {
//     $('#advertise').addClass('swiper-container')
//     $('.widget').addClass('swiper-wrapper');
//     $('.widget>a').addClass('swiper-slide');
//     var swiper = new Swiper(".newProduct", {
//       centeredSlides: true,
//       loop: true,
//       slidesPerView: 1,
//       spaceBetween: 0,
//       pagination: {
//         el: ".swiper-pagination",
//         type: "bullets",
//         clickable: true,
//       },
//     });
//   };
// });

// newProduct 1000px 이하 일때 횡스크롤
// 반대의 경우도 작성하기!! else
// var scroll = $(window).resize(function(){
//   if (window.innerWidth < 1001) {
//     $('.scroll').addClass('swiper-wrapper'),
//     $('.scroll>li').addClass('swiper-slide'),
//     $('.productLayout > ul > li').css('padding','0');
//     var swiper = new Swiper(".newProduct", {
//       centeredSlides: true,
//       loop: true,
//       slidesPerView: 2,
//       spaceBetween: 0,
//       breakpoints: {
//             // when window width is <= 320px     
//         320: {       
//           slidesPerView: 1,
//           spaceBetween: 10     
//         },     
//         // when window width is <= 480px     
//         480: {       
//           slidesPerView: 2,       
//           spaceBetween: 20     
//         }
//       }
//     });
//   } else if (window.innerWidth > 1000) {
//     $('.scroll').removeClass('swiper-wrapper'),
//     $('.scroll>li').removeClass('swiper-slide'),
//     $('.productLayout > ul > li').css('padding','30');
//   }
// });

