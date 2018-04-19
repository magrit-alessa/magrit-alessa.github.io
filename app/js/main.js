
$(document).ready(function(){
  var $page = $('html, body');

  $('a[href*="#"]').click(function() {
      $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
      }, 600);
      return false;
  });


  $(".btn_menu").click(function(){
    $('.nav').slideToggle();
    $('.nav__elem--a , .nav__elem--a-grey ').click(function(event){
      if($(event.target).closest('.btn_menu').length) return;
      $('.nav').fadeOut(300);
      event.stopPropagation();
    })
  });


  $(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
       $('nav').addClass('nav__fixed');
    }else {
       $('nav').removeClass('nav__fixed');
    }
});


$(window).scroll(function(){
  if($(window).scrollTop() >= 50) {
     $('.btn_menu').addClass('fixed');
     $('nav').addClass('nav__fixed');
  }else {
     $('.btn_menu').removeClass('fixed');
     $('nav').removeClass('nav__fixed');
  }
});



  $(window).scroll(function(){
    var $sections = $('section');
	$sections.each(function(i,el){
    var top  = $(el).offset().top-100;
    var bottom = top +$(el).height();
    var scroll = $(window).scrollTop();
    var name = $(el).attr('name');
    	if( scroll > top && scroll < bottom){
			$('div[name="'+name+'"].circle').addClass('active');
    }else{
        $('div[name="'+name+'"].circle').removeClass('active');
    }
    })
 });

 $('.projects__slider').slick({
   infinite: true,
   prevArrow:'<button class="projects__btn-left"></button>',
   nextArrow: '<button class="projects__btn-right"></button>',

   });

 $('img.projects__slider--img').click(function(){
   $('div.projects__slider--imgSize').toggleClass('projects__activeSlider');
   });


$("#form").submit(function(){
  $.ajax({
    type: "POST",
    url:"mail.php",
    data: $(this).serialize()
  }).done(function(){
    alert("Thank You!");
  });
  return false;
});


});
