$(document).ready(function() {
  $('.main-silder').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '.arrow-left',
    nextArrow: '.arrow-right',
    pauseOnHover: false,
    fade: true,
    speed: 1000,
    dots: true,
  });
})