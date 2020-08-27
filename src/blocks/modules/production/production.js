$(document).ready(function () {

  $('.production-slider_top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.production-slider_bottom'
  });
  $('.production-slider_bottom').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.production-slider_top',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
});