(function ($) {
    "use strict";

    jQuery(document).ready(function($){


        var scrollup = $("#scrollTop")

        scrollup.on('click', function(){
            $('html, body').animate({
                scrollTop: 0
            }, 2000);
            scrollup.addClass("Top0");
        });

        $(window).on('scroll', function(){
            if($(this).scrollTop() > 300){
                scrollup.fadeIn();
            } else{
                scrollup.removeClass("Top0").fadeOut();
            };
        });

        var headerTop = $(".header-top").height();

        $(window).scroll(function() {    
            var scrollToBottom = $(window).scrollTop();

            if (scrollToBottom > headerTop) {
                $(".header-area").addClass("fixed");

            } else {
                $(".header-area").removeClass("fixed");

            }
        });

        $(".homepage-slides").owlCarousel({
            items: 1,
            autoplay: true,
            nav: false,
            dots: true,
            loop: true,
            smartSpeed: 1000,
            autoplayHoverPause: true,
        });
        $(".homepage-slides .owl-dots").addClass("container");

        $(".homepage-slides").on('translate.owl.carousel', function() {
            $('.single-slide-item-tablecell h1').removeClass('fadeInUp animated').hide();
            $('.single-slide-item-tablecell p').removeClass('fadeInDown  animated').hide();
            $('.single-slide-item-tablecell .boxed-btn').removeClass('zoomIn  animated').hide();
        });

        $(".homepage-slides").on('translated.owl.carousel', function() {
            $('.owl-item.active .single-slide-item-tablecell h1').addClass('fadeInUp animated').show();
            $('.owl-item.active .single-slide-item-tablecell p').addClass('fadeInDown animated').show();
            $('.owl-item.active .single-slide-item-tablecell .boxed-btn').addClass('zoomIn animated').show();
        });

        $(".logo-carousel").owlCarousel({
            items: 5,
            autoplay: true,
            nav: false,
            dots: true,
            loop: true,
            margin: 40,
            smartSpeed: 500,
        });


    });


    jQuery(window).load(function(){

        $("#loading").delay(500).fadeOut(500);
    });


}(jQuery));	