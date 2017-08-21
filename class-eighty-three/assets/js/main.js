(function ($) {
    "use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        $('#web-design-progressbar').circleProgress({
            value: 0.9,
            size: 200,
            fill: '#ff1300',
            thickness: 8,
            emptyFill: '#F8BC3A' 

        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-percentage').html(Math.round(90 * progress) + '<i>%</i>');
        });

        $('#graphics-design-progressbar').circleProgress({
            value: 0.48,
            size: 200,
            fill: '#0c55f8',
            thickness: 8,
            emptyFill: '#F8BC3A' 

        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-percentage').html(Math.round(48 * progress) + '<i>%</i>');
        });

        $('#digital-marketing-progressbar').circleProgress({
            value: 0.65,
            size: 200,
            fill: '#6e0bf5',
            thickness: 8,
            emptyFill: '#F8BC3A' 

        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-percentage').html(Math.round(65 * progress) + '<i>%</i>');
        });






    });


    jQuery(window).load(function(){


    });


}(jQuery));	