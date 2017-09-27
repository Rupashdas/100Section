(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        $('.testimonial-carousel').owlCarousel({
            items: 1,
            autoplay: false,
            nav: true,
            dots: false,
            loop: true,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	