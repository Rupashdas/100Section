(function ($) {
    "use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        $(".featureed-trailors-carousel").owlCarousel({
            items: 1,
            margin: 30,
            loop: true,
            dots: false,
            nav: true,
            autoplay: false,

        });
        
        $('.owl-item.active .trailor-text h2').addClass('animated fadeIn');






    });


    jQuery(window).load(function(){


    });


}(jQuery));	