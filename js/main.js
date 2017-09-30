
(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

    });


    jQuery(window).load(function(){

        
    });
  /* menu  sticky */
    var header = $('.main_menu');
    var win = $(window);
    
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 50) {
            header.removeClass("sticky");
        } else {
            header.addClass("sticky");
        }
    });

}(jQuery));	


  //====================
 //  Skill
 //===================

 $(document).ready(function(){
	 	$('.skill_content').appear(function(){  //user for animation when reach the exect div
		 		$('.skills').percentcircle({
		 		animate: true,
		 		bgColor: '#ddd',
		 		coverBg:'#fff',
		 		fillColor:'#46be25',

		 		Cir:{
		 			'position':'relatiive',
		 			'text-align':'center',

		 		}
		 	});
	 	});
 	
 });

 // slider
 $(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });
});

// slider

$(document).ready(function(){
      $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        margin:20,
        // animateIn: 'zoomIn',
        animateOut: 'fadeOutLeft',
        autoplay:true,
        autoplayTimeout:5000,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});

//Isotope active js code:
//************************

// Active isotope with jQuery code:

$('.main_iso').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
});
// Isotope click function
$('.iso_nav ul li').click(function(){
    $('.iso_nav ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.main_iso').isotope({
        filter: selector
    });
    return false;
});

   /*--------------------------
        jQuery scroll Nav
    ---------------------------- */
    var top_offset = $('.main_menu').height() - 0;  // get height of fixed navbar
    $('.rightMenu').onePageNav({
        scrollOffset: top_offset
    }); 

// map view
    $(document).ready(function(){
       $('.map_close').click(function(){
        $('.map').hide('slow');
       }); 

    });
        $(document).ready(function(){
       $('.mapicon').click(function(){
        $('.map').show('slow');
       }); 

    });