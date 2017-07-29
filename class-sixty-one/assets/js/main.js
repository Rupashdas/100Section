(function ($) {
    "use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        var placeselector = {lat: 23.758063, lng:90.3844153};
        var placetwo = {lat: 23.758426, lng: 90.390033};
        var placethree = {lat: 23.749991, lng: 90.393273};


        $('.map').gmap3({
            zoom: 15,
            center: placeselector,
            mapTypeId: "shadeOfGrey",
            scrollwheel: false,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
            }
        })
            .styledmaptype(
            "shadeOfGrey",
            [
                {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},
                {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#fffff"},{"lightness":16}]},
                {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#3913d8"},{"lightness":20}]},
                {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
                {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#E4E4E4"},{"lightness":20}]},
                {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#e0e0e0"},{"lightness":21}]},
                {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ebcc6c"},{"lightness":17}]},
                {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#FFEBAF"},{"lightness":29},{"weight":0.2}]},
                {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},
                {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#dddddd"},{"lightness":16}]},
                {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#bf900f"},{"lightness":19}]},
                {"featureType":"water","elementType":"geometry","stylers":[{"color":"#B3D5FF"},{"lightness":17}]}
            ],
            {name: "Shades of Grey"}
        )
            .marker({
            position: placeselector,
            icon: 'assets/img/map-marker.png'
        });





















    });


    jQuery(window).load(function(){


    });


}(jQuery));	