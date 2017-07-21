(function ($) {
    "use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            nav: false,
            dots: true,
            animateOut: 'fadeOut'
        });
            
         $(".testimonial-carousel").on('translate.owl.carousel', function() {
                $('.single-testimonial-item .user-avatar').removeClass('fadeInDown animated').hide();
                $('.single-testimonial-item .testimonial-content').removeClass('fadeInUp animated').hide();
            });
        
            $(".testimonial-carousel").on('translated.owl.carousel', function() {
                $('.owl-item.active .single-testimonial-item .user-avatar').addClass('fadeInDown animated').show();
                $('.owl-item.active .testimonial-content').addClass('fadeInUp animated').show();
            });





    });


    jQuery(window).load(function(){


    });


}(jQuery));	