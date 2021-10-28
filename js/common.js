//처음 비디오 실행시 비동기 현상으로 인한 재생안됨 방지
var iframe = document.querySelectorAll("iframe[title=hbafAd]"); //title이 hbafAd인 iframe을 모두 불러옴 
var player = new Vimeo.Player(iframe[0]);

//비디오 로드
player.loadVideo(520797296).then(function(id) {
  //비디오 플레이 실행
  player.play().then(function() {
    
  }).catch(function(error) {
    //플레이가 제대로 안될시 다시 플레이
    player.play();
  });
});


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

var swiper2 = new Swiper('.total', {
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

var swiper3 = new Swiper('.event', {
	slidesPerView: 1,
	loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: true
});

var swiper4 = new Swiper('.newProduct', {
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
    $('header').css('height','70px');
    $('#gnb').css('display','none'),
    $('#logo').css('margin-left','5%'),
    $('main').css('display','block');
  }

  else {
    $('#gnb').addClass('dropdowncontainer'),
    $('#gnb > ul').addClass('dropdown'),
    $('#gnb > ul > li').addClass('dropdowncontent'),
    $('header').css('height','71px');
    $('main').css('display','none'),
    $('#gnb').css('display','inline-block'),
    $('header > nav > ul').css('left','30%');
  }
});

// 메뉴 클릭시 닫음
if($('#gnb').is(':visible')){
  $('#gnb > ul > li').click(function(){
    $('.dropdowncontainer').css('display','none');
    }
  );
}
