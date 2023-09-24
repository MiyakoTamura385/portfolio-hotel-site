//vegas 画像の設定
  let slides = [
    {src:'/images/hotel-zoom1-pc.jpg'},
    {src:'/images/hotel-zoom2-pc.jpg'},
    {src:'/images/hotel-zoom3-pc.jpg'},
    {src:'/images/hotel-zoom4-pc.jpg'}
   ];
   
   
   if (window.matchMedia("(max-width: 991px)").matches) {
    slides = [
     {src:'/images/hotel-zoom1-sp.jpg'},
     {src:'/images/hotel-zoom2-sp.jpg'},
     {src:'/images/hotel-zoom3-sp.jpg'},
     {src:'/images/hotel-zoom4-sp.jpg'}
    ];
   }
   $('#mainvisual').vegas({
    slides: slides,
    transition: 'fade',
    transitionDuration: 4000,
    delay: 18000,
    cover:true,
    animation: 'random',
    animationDuration: 20000,
    timer: true
   });

/*===========================================================*/
/*クリックしたらナビが右から左に出現*/
/*===========================================================*/
$(".openbtn").on('click', function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").on('click', function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});



// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  // ふわっ
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
