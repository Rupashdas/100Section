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
            dots: true,
            nav: false,
            autoplay: true,
        });
        
        $(".featureed-trailors-carousel").on('translate.owl.carousel', function() {
                $('.single-trailor-item h2').removeClass('fadeInUp animated').hide();
                $('.single-trailor-item p').removeClass('fadeIn animated').hide();
                $('.single-trailor-item .bordered-btn').removeClass('fadeInDown animated').hide();
                $('.single-trailor-item .trailor-info').removeClass('fadeIn animated').hide();
            });
        
            $(".featureed-trailors-carousel").on('translated.owl.carousel', function() {
                $('.owl-item.active .single-trailor-item h2').addClass('fadeInUp animated').show();
                $('.owl-item.active .single-trailor-item p').addClass('fadeIn animated').show();
                $('.owl-item.active .single-trailor-item .bordered-btn').addClass('fadeInDown animated').show();
                $('.owl-item.active .single-trailor-item .trailor-info').addClass('fadeIn animated').show();
            });






    });


    jQuery(window).load(function(){


    });


}(jQuery));	