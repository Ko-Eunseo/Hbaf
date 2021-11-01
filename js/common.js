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
