(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        $(".play-btn").magnificPopup({
            type: 'video',
        });
        var s = skrollr.init({
            forceHeight: false
        });


        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	