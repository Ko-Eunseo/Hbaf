# Hbaf
1.프로젝트 계획이유
=================

"H는 묵음이야." 어디서 많이 들어 본 대사라고 생각되지 않나요? 맞습니다. K-Almond로 유명한 그 Hbaf(바프)의 CF에서 나오는 대사입니다. 저 잘 만들어진 광고와는 별개로 제가 Hbaf를 먹어 본 적은 없었습니다. 그러다 어쩌다 한번 먹어볼까? 하는 마음에 최근에 조그만 봉지를 사왔었는데 생각외로 너무 맛있었습니다. 그래서 Hbaf의 홈페이지를 찾아 들어가 보았는데, 네이버 스토어만 있지 따로 홈페이지가 있지는 않았습니다. 마침 포트폴리오를 어떤 주제로 만들어야 하나 하는 고민을 하고 있던 차라, 바프의 홈페이지를 만들어보자고 결심을 하게 되었습니다.

2.홈페이지에 대해
===============

2.1 index page
--------------

이 홈페이지는 제가 피그마로 디자인하고 구현까지 하였습니다. 기능적인 면은 구현되어있지 않습니다. 제가 의도한 것들에 대해 나열해보자면,
1. Logo를 클릭하면 첫페이지로 이동한다.
2. Header의 nav는 클릭하면 index의 해당 구역으로 이동한다.
3. 로그인 아이콘을 클릭하면 로그인 페이지로 이동하며, 해당 페이지에서 로그인 버튼을 클릭하면 다시 첫 페이지로 돌아온다.
4. 돋보기 아이콘을 클릭하면 검색할 수 있는 input box가 나타난다.
5. index의 메인 커버 동영상은 두가지이며, pagination을 클릭하면 다른 동영상을 볼 수 있다.
6. 첫번째 section에서 세 개의 이미지에 각각 마우스를 올리면 키워드가 뜬다.
7. 가장 최근의 광고인 '먼투썬(Monday to Sunday)'은 의미가 상통하는 '언제 어디서나 바프와 함께'라는 키워드와 함께 강조했다.
8. 두번째 section의 상품 슬라이드는 자동으로 돌아가고 pagination이나 button을 통해 슬라이드를 조정할 수 있다. 상품위로 마우스를 올리면 선택된 상품이 위로 올라가 직관적으로 볼 수 있게 하였으며, 이미지 뒤에 숨어있던 상품명과 가격이 나타난다. 클릭하면 상품페이지로 이동한다.
9. 세번째 section의 신메뉴는 역시 마우스를 올리면 직관적으로 볼 수 있게 해당 상품이 위로 올라가게 하였으며, 이미지 뒤에 숨어있던 상품명이 나타난다. 신상품이 올라갈 때를 대비해 횡스크롤이 가능하도록 구현하였다.
10. 네번째 section의 이벤트 슬라이드는 자동으로 돌아가고, button을 이용해 슬라이드를 조정할 수 있다.
11. 푸터에 인스타그램 아이콘과 함께 Hbaf-official을 누르면 바프 인스타그램 페이지로 넘어간다.

2.2 shopping page
-----------------

인덱스 페이지에서 상품을 클릭하면 상품페이지가 나옵니다.

1. Logo를 클릭하면 첫 페이지로 이동한다.
2. 구매수량을 올리거나 내릴 수 있다. 디폴트값은 1.
3. 추천상품은 횡스크롤로 마우스 조작을 통해 옆으로 이동할 수 있다.
4. 추천상품을 보고싶지 않은 사람들을 위해 닫기버튼을 만들었다.
5. 푸터에 인스타그램 아이콘과 함께 Hbaf-official을 누르면 바프 인스타그램 페이지로 넘어간다.

2.3 개선할 점
--------------
개선할 점이라고 쓰고 개선하고 싶은 점이라고 쓴다... 하하

> 디자인적 요소
  1. gnb nav 디자인을 좀더 깔끔하게 하고싶다.
  2. login page를 인덱스페이지 내에서 열고싶다.
  3. 페이지네이션 폰으로 봤을때 너무 큰듯 줄이자.

> 기능적 요소
  1. 상품검색이 가능하게 하고싶다. (유튜브 보고 기능 구현해보자)
  2. 가입 or 로그인을 할 수 있게 하고싶다.
  3. 상품페이지에서 상품을 담으면 카트에 수량이 뜨게 하고 싶다.
  4. 카트를 누르면 담은 상품을 볼 수 있고, 총 금액까지 뜨게 하고 싶다.
  5. 상품페이지에서 후기를 남길 수 있는 혹은 별점을 줄 수 있는 기능을 만들고 싶다.
  6. 위젯부분 혼술의 바프, 캠핑의 바프 등 누르면 해당 상품이 뜨게 하고싶다.
  7. 상품 슬라이드 섹션 내 nav를 클릭하면 해당 상품이 뜨게 하고 싶다.

3.마무리
========
아직 계속해서 개선할 방안을 찾고 있는 상태입니다. 재미있는 홈페이지를 만들고 싶어서 할 수 있는 내에서 이런저런 요소를 넣고있기도 합니다. 부족하지만 그래도 저에겐 뿌듯하고 자랑스러운 결과물입니다. 여기까지 와서 봐주신 모든 분들께 감사합니다. 
