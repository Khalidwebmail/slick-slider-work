$(document).ready(function() {
  $('.main-banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '.angle-left',
    nextArrow: '.angle-right',
    pauseOnHover: false,
    fade: true,
    speed: 1000,
    dots: true,
  });
})