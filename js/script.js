// スライドショー　ここから
const swiper = new Swiper('.swiper', {
  autoplay: true, //自動再生オン
  delay: 6000, //次のスライドに切り替わるまでの時間
  effect: 'fade', //アニメーションの種類（フェード機能オン）
  speed: 2000, //フェードのスピード
  direction: 'horizontal', // スライド方向
  loop: true, // ループの有無
});
// スライドショー　ここまで

// 予約ボタン　ここから
const toReservationButton = document.getElementById('to_reservation');
window.addEventListener('scroll', function () {
  if (window.scrollY > 1200) {
    toReservationButton.style.display = 'block';
    toReservationButton.classList.add('fadeIn');
  } else {
    toReservationButton.style.display = 'none';
  };
});
// 予約ボタン　ここまで

// TOPへ戻るボタン　ここから
// スマホ以外
const toTopButton = document.getElementById('to_top');
window.addEventListener('scroll', function () {
  if (window.scrollY > 1200) {
    toTopButton.style.display = 'block';
    toTopButton.classList.add('fadeIn');
  } else {
    toTopButton.style.display = 'none';
  };
});

toTopButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// スマホ
const spToTopButton = document.getElementById('sp-to_top');

spToTopButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
// TOPへ戻るボタン　ここまで

// スムーススクロール　ここから
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // デフォルトのジャンプ動作を無効化

    // リンク先のID要素を取得し、スムーススクロール
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth' // スムーススクロールを指定
    });
  });
});
// スムーススクロール　ここまで

// ローディング画面　ここから
window.onload = function () {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
};
// ローディング画面　ここまで

// フェードインアップ　ここから
$(function () {
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});
// フェードインアップ　ここまで

// フェードインアップ　レスポンシブ　ここから
$(function () {
  $(".ip-sp-inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});
// フェードインアップ　レスポンシブ　ここまで

//ハンバーガーメニュー　ここから
const button = document.querySelector('.hamburger'); //ハンバーガーボタンを探す
const nav = document.querySelector('.navigation'); //ドロワーを探す

button.addEventListener('click', function () { //ハンバーガーボタンがクリックされたら
  button.classList.toggle('open'); //ボタンに.openをつける
  nav.classList.toggle('open'); //ドロワーに.openをつける
});

nav.addEventListener('click', function () { // ドロワーがクリックされたら
  nav.classList.remove('open'); // ドロワーから.openを削除して閉じる
  button.classList.remove('open'); // ボタンから.openを削除して元に戻す
});
// ハンバーガーメニュー　ここまで