//$(function() {
	//Grid.init();
//});





$('input, textarea').placeholder();


enquire.register("screen and (min-width:65em)", function() {
	    $(".poemline").typed({
	      strings: ["magnify your unfair advantage.", "get people talking.", "grow faster.", "build influence.", "make a bigger impact."],
	      typeSpeed: 50,
	      backDelay: 400,
		  loop: true
	    });
	
	   $('.menu-wrap').stickychimp();
	
});	
enquire.register("screen and (max-width:65em)", function() {
		 $(".poemline").typed({
		      strings: ["magnify your unfair advantage."],
		      typeSpeed: 50,
		      backDelay: 400,
			  loop: false
		    });	
	});






  $(".sidemenu").square_menu({
	flyDirection: "top", // "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left" and "bottom-right"
	button: "", // custom the text of the toggle button
	animationStyle: "horizontal", // "horizontal" or "vertical"
	closeButton: "X" // Change this to false to hide the close button
  });


jQuery("#closeFancy").click(function(){
                                                jQuery.fancybox.close();
                                                return false;
                                            });

$('.fancybox').fancybox({
	padding : 0,
    openEffect  : 'elastic',
    closeBtn : false,
	closeClick: false,
	modal: true,
    
	});





/***************** Image with Animation *******************/

$('.with-animation').each(function() {

	$(this).appear(function() {
		if($(this).attr('data-animation') == 'fade-in-from-left'){
			$(this).delay($(this).attr('data-delay')).animate({
				'opacity' : 1,
				'left' : '0px'
			},800,'easeOutSine');
		} else if($(this).attr('data-animation') == 'fade-in-from-right'){
			$(this).delay($(this).attr('data-delay')).animate({
				'opacity' : 1,
				'right' : '0px'
			},800,'easeOutSine');
		} else if($(this).attr('data-animation') == 'fade-in-from-bottom'){
			$(this).delay($(this).attr('data-delay')).animate({
				'opacity' : 1,
				'bottom' : '0px'
			},800,'easeOutSine');
		} else if($(this).attr('data-animation') == 'fade-in') {
			$(this).delay($(this).attr('data-delay')).animate({
				'opacity' : 1
			},800,'easeOutSine');	
		} else if($(this).attr('data-animation') == 'grow-in') {
			var $that = $(this);
			setTimeout(function(){ 
				$that.transition({ scale: 1, 'opacity':1 },900,'cubic-bezier(0.15, 0.84, 0.35, 1.25)');
			},$that.attr('data-delay'));
		}
		
	},{accX: 0, accY: -105},'easeInCubic');

});


new GridScrollFx( document.getElementById( 'grid' ), {
	viewportFactor : 0.4
} );
