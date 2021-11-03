var swiper1 = new Swiper('.cover', {
	slidesPerView: 1,
  roop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  autoplay: false
});

//슬라이드가 바뀌었을때 동영상 재생 안됨 방지
swiper1.on('slideChange', function () {
  var swiperIdx = swiper1.activeIndex; //현재 슬라이드의 index번호를 구함
  var iframe = document.querySelectorAll("iframe[title=hbafAd]"); //title이 hbafAd인 iframe을 모두 불러옴 
  var player;

  if (swiperIdx === 0) { // 첫번째 슬라이드 일때 첫번째 영상 재생
    player = new Vimeo.Player(iframe[0]);
  } else { //두번째 슬라이드 일때 두번째 영상 재생 
    player = new Vimeo.Player(iframe[1]);
  }

  player.play(); //비디오 재생
});

var swiperTotal = new Swiper('.total', {
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
  

  var swiperNew = new Swiper('.newProduct', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 20,
    initialSlide: 1,	
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });

  var swiperEvent = new Swiper('.event', {
    slidesPerView: 1,
    loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: true
});

