(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        $(".feature-projects").owlCarousel({
            nav: false,
            autoplay: true,
            loop: true, 
            dots: true,
            margin: 0,
            items: 1,
        });
        
         $(".feature-projects").on('translate.owl.carousel', function() {
                $('.project-bg').removeClass('zoomIn animated').hide();
                $('.project-text').removeClass('fadeIn animated').hide();
                $('.feature-project-wrap h2').removeClass('fadeInUp animated').hide();
            });
        
            $(".feature-projects").on('translated.owl.carousel', function() {
                $('.owl-item.active .project-bg').addClass('zoomIn animated').show();
                $('.owl-item.active .project-text').addClass('fadeIn animated').show();
                $('.feature-project-wrap h2').addClass('fadeInDown animated').show();
            });




        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	