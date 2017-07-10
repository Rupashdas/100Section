(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $(".homepage-slides").owlCarousel({
			items:1,
			dots:true,
			loop:true,
			nav:true,
			autoplay:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            


        });
    });

    jQuery(window).load(function(){

        
    });


}(jQuery));	