(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        $(".listing-carousel").owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            nav: false,
            dots: true,
            autoplay: false
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	