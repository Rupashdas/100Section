(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        
        $(".project-title li").on('click',  function(){
            var selector = $(this).attr('data-filter');
            $(".porejct-list").isotope({
                filter: selector
            });
        });
        
        $(".project-title li").on('click', function(){
            $(".project-title li").removeClass("active");
            $(this).addClass("active");
        });
        
        $(".open-img").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            },
        });
            

    });


    jQuery(window).load(function(){

        jQuery(".porejct-list").isotope();
    });


}(jQuery));	