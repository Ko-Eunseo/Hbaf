// productinfo box open and close
$('.closeInfo').click(function(){
  if($('.fa-toggle-on:first').is(':visible')){
    $('.productInfo').css('width','20vw'),
    $('.fa-toggle-on:first').css('display','none'),
    $('.fa-toggle-off:first').css('display','inline-block'),
    $('input[type="submit"]').css('padding','10px 3px');
    }
  else {
    $('.productInfo').css('width','50vw'),
    $('.fa-toggle-on:first').css('display','inline-block'),
    $('.fa-toggle-off:first').css('display','none'),
    $('input[type="submit"]').css('padding','10px 60px');
    // recommand box도 같이 오픈
    $('.recommand').css('display','inline-block'),
    $('.fa-toggle-on:last').css('display','inline-block'),
    $('.fa-toggle-off:last').css('display','none');
    }
  });
  // product recommand box open and close
  $('.closeRecom').click(function(){
  if($('.fa-toggle-on:last').is(':visible')){
    $('.recommand').css('display','none');
    }
  // else {
  //   $('.recommand').css('width','50vw'),
  //   $('.fa-toggle-on:last').css('display','inline-block'),
  //   $('.fa-toggle-off:last').css('display','none');
  //   }
  });
  var swiper = new Swiper(".recommandBox", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });