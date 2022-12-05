window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}

$(function(){

  //ハンバーガーメニュー
$('.js-open-menu').on('click',function(){
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
});


//レスポンシブ時にメニューを押した時にメニューを閉じる
$('.js-menu').on('click',function(){
  $('.js-open-menu').toggleClass('active');
  $('.js-toggle-sp-menu-target').toggleClass('active');
});


// #page-topをクリックした際の設定

var pageTop = $('#page-top');
pageTop.hide();
$(window).on('scroll',function(){
  if($(this).scrollTop() > 100){
    pageTop.fadeIn();
  }else{
    pageTop.fadeOut();
  }
});
pageTop.click(function () {
  $('body,html').animate({
      scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});


// フロートヘッダーメニュー
  var targetHeight = $('.js-float-menu-target').height();
  $(window).on('scroll', function() {
    $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
    $('.js-float-nav').toggleClass('float-nav-active', $(this).scrollTop() > targetHeight);
  });

//ちょっと遅れてついてくるストーカー要素の指定
var stalker = $("#stalker");

$(document).on("mousemove",function(e){
    //カーソルの座標位置を取得
    var x=e.clientX;
    var y=e.clientY;
    //ストーカー要素のcssを書き換える用
    setTimeout(function(){
      stalker.css({
        "opacity":"1",
        "top":y+"px",
        "left":x+"px"
      });
    },140);//カーソルより遅れる時間を指定
  });

//ヘッダーのナビゲーションのリンク
  $('.js-float-about').on('click',function(){
    $('body,html').animate({
      scrollTop:$('#about').offset().top
    },500);
  });

  $('.js-float-skills').on('click',function(){
    $('body,html').animate({
      scrollTop:$('#skills').offset().top
    },500);
  });

  $('.js-float-works').on('click',function(){
    $('body,html').animate({
      scrollTop:$('#works').offset().top
    },500);
  });

  $('.js-float-contact').on('click',function(){
    $('body,html').animate({
      scrollTop:$('#contact').offset().top
    },500);
  });

  $('.js-float-ul').on('mouseenter',function(){
    $('#stalker').fadeOut('fast')
  });
  $('.js-float-ul').on('mouseleave',function(){
    $('#stalker').fadeIn('fast')
  });


});

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  // ふわっ
  $('.js-fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
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
