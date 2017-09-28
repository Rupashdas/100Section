(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        $('.homepage-slides').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dot: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dotsData: true,
            
        });
        
         $(".homepage-slides").on('translate.owl.carousel', function() {
            $('.single-carousel-item').removeClass('fadeOut animated').hide();
        });

        $(".homepage-slides").on('translated.owl.carousel', function() {
            $('.owl-item.active .single-carousel-item').addClass('fadeIn animated').show();
        });
        


        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	