(function ($) {
    "use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        $(".slider-area").owlCarousel({
            items: 1,
            autoplay: false,
            nav: false,
            dots: true,
            loop: true,
            smartSpeed: 1000,
            autoplayHoverPause: true,
        });
      


    });


    jQuery(window).load(function(){


    });


}(jQuery));	