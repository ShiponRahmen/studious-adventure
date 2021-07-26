(function ($) {
    "use strict";

    /* ..............................................
    Loader 
    ................................................. */

    $(window).on('load', function () {
        $('.preloader').fadeOut();
        $('#preloader').delay(550).fadeOut('slow');
        $('body').delay(450).css({ 'overflow': 'visible' });
    });

    	/* ..............................................
    Navbar Bar
    ................................................. */
	
	$('.navbar-nav .nav-link').on('click', function() {
		var toggle = $('.navbar-toggler').is(':visible');
		if (toggle) {
			$('.navbar-collapse').collapse('hide');
		}
    });
    $('.top-header .navbar .navbar-collapse ul li a').click(function(){
        $('.active').removeClass('active')
        $(this).toggleClass('active')
    });

    /* ..............................................
    Fixed Menu
    ................................................. */

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.top-header').addClass('fixed-menu');
        } else {
            $('.top-header').removeClass('fixed-menu');
        }
    });



    /* ..............................................
    Scroll To Top
    ................................................. */

    $(document).ready(function () {

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#scroll-to-top').fadeIn();
            } else {
                $('#scroll-to-top').fadeOut();
            }
        });

        $('#scroll-to-top').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

    });


}(jQuery));

$(function(){

    var containerEl = document.querySelector('.mixitupItem')
    var mixer = mixitup(containerEl);
    

    $('.port-menu ul li').click(function(){
        $('.active').removeClass('active');
        $(this).toggleClass('active');
    });

    $(document).ready(function(){
        $('.venobox').venobox(); 
    });

    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    $('.banner-slider').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplaySpeed: 3000,
        autoplay: true,
        prevArrow: '<i class="pArrow fal fa-chevron-double-left"></i>',
        nextArrow: '<i class="nArrow fal fa-chevron-double-right"></i>'
    });

    $('.blog-slider').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        centerMode: true,
        centerPadding: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<div class="slick-prev"><i class="fal fa-chevron-circle-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fal fa-chevron-circle-right"></i></div>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: 'false',
                slidesToShow: 3,
                autoplay: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: 'false',
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 1000
              }
            }
          ]
      });
});
