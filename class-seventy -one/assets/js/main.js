(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="modal"]').tooltip();
		$('[data-toggle="popover"]').popover();


        


    });


    jQuery(window).load(function(){
		
		$('#learn-more-modal').modal('hide', 'toggle');
        
    });


}(jQuery));	