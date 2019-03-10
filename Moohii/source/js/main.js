$(document).ready(function(){
// console.log($(document).width());
$('.slider__container').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<div class="slider__btn-prev"></div>',
  nextArrow: '<div class="slider__btn-next"></div>',
  dots: true
});



});
