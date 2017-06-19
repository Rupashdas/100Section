(function ($) {
    "use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();
        $("#homepage-slides").owlCarousel({
            items: 1,
            animateOut: 'fadeOutDown',
            animateIn: 'zoomIn',
            autoplay: true,
            smartSpeed: 500,
            nav: false,
            loop: true,
            dots: true,
        });






    });


    jQuery(window).load(function(){


    });


}(jQuery));	