$('.slick01').slick({ //{}を入れる
  autoplay: true,  //自動再生
  autoplaySpeed: 5000,  // 5000msで切り替わり
  dots: true,  //好きなスライド番号を選択できる
  arrows: true,  //prev,nextの表示
  slidesToShow: 1,  //表示するスライド数
  slidesToScroll: 1, //1回で動くスライド数
  variableWidth: true,  //違う幅の画像を扱う場合に余白をなくす
  asNavFor: '.thumb',
  // 前後の画像がちょっと見えるスライド
  centerMode: true,
  centerPadding: '20%',
  responsive:[
    {
      breakpoint: 768,
      settings:{
        arrows: true,
      }
    },
    {
      breakpoint: 640,
      settings:{
        arrows: false,
        dots: false,
      }
    },
  ]
});

$('.thumb').slick({
  asNavFor: '.slider',
  focusOnSelect: true,
  slidesToShow:4,
  slidesToScroll:1,
});

// 画像が中央に来ると大きくなる処理
// スライドが切り替わる前にイベント発生
$('.slick01').on('beforeChange', function(){
  $('.slick-current').removeClass('is--active');
});
// スライドが切り替わった後にイベント発生
$('.slick01').on('afterChange', function(){
  $('.slick-current').addClass('is--active');
});
