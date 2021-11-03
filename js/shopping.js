  // product recommand box close
  $('.closeRecom').click(function(){
  if($('.fa-toggle-on:last').is(':visible')){
    $('.recommand').css('display','none');
    }
  });
  
  var swiperRecom = new Swiper(".recommandBox", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });