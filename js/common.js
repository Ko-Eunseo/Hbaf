new Swiper('.cover', {
	slidesPerView: 1,
  roop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  autoplay: false
});

new Swiper('.total', {
  slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
	slidesPerGroup : 3,
  centeredSlides: true,
  spaceBetween: 10,
  initialSlide: 1,
  loopFillGroupWithBlank: true,
	loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  centeredSlides: true,
  autoplay: true
});

new Swiper('.event', {
	slidesPerView: 1,
	loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: true
});

new Swiper('.newProduct', {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 20,
  initialSlide: 1,	
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

// 서치바 active
$('.search').click(function(){
  if($('.searchActive').is(':visible')){
    $('.searchActive').css('display','none');
  }
  else {
    $('.searchActive').css('display','inline-block');
  }
});

// toggle button avtive
$('.toggle').click(function(){
  if($('#gnb').is(':visible')){
    $('#gnb').css('display','none'),
    $('#logo').css('margin-left','5%'),
    $('main').css('display','block');
  }
  else {
    $('#gnb').addClass('dropdowncontainer'),
    $('#gnb > ul').addClass('dropdown'),
    $('#gnb > ul > li').addClass('dropdowncontent'),
    $('#gnb > ul > i.exit').css('display','block'),
    $('main').css('display','none'),
    $('#gnb').css('display','inline-block'),
    $('header > nav > ul').css('left','30%');
  }
});