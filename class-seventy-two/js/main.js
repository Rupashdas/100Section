(function ($) {
	"use strict";

    jQuery(document).ready(function($){
	new WOW().init();
	
	var headerheight = $(".header").height();
	
	$(window).scroll(function() {    
		var scrollUp = $(window).scrollTop();

		if (scrollUp >= headerheight) {
			$(".navbar-default").addClass("fixed");
		} else {
			$(".navbar-default").removeClass("fixed");
		}
	});
	
	var footerheight = $(".footer").height();
	
	$(".sticky-footer-wrapper").css('margin-bottom', footerheight + 'px');




	$('.countdown').final_countdown({
            'start': 1362139200,
            'end': 1388461320,
            'now': 1387461319        
        });
	

    });



	
	 



    jQuery(window).load(function(){
	 
	 
	 
        
    });


}(jQuery));	