$(function() {
	Grid.init();
});


		      $(".poemline").typed({
		        strings: ["magnify your unfair advantage.", "get people talking.", "grow faster.", "build influence.", "make a bigger impact."],
		        typeSpeed: 50,
		        backDelay: 400,
        			loop: true
		      });


  $(".sidemenu").square_menu({
	flyDirection: "top", // "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left" and "bottom-right"
	button: "", // custom the text of the toggle button
	animationStyle: "horizontal", // "horizontal" or "vertical"
	closeButton: "X" // Change this to false to hide the close button
  });


// Set options
        var options = {
            offset: 500,
            classes: {
                clone:   'banner--clone',
                stick:   'banner--stick',
                unstick: 'banner--unstick'
            }
        };


// Create a new instance of Headhesive
var headhesive = new Headhesive('.banner', options);

$('#signup_btn').click(function(e) {
    $('#sign_up').lightbox_me({
        centered: true, 
        onLoad: function() { 
            $('#sign_up').find('input:first').focus()
            }
        });
    e.preventDefault();
});



/*----------------------------------------------*/
/* 9 - WOOKMARK -------------------------------*/
/*---------------------------------------------*/

function applyLayout( $container ){
	if( undefined === $container ) {
		var $container = jQuery( '.og-grid .item' );
	}
	$container.find('script').remove();
	$container.wookmark({
		align: 'left',
		autoResize: true, // This will auto-update the layout when the browser window is resized.
		container: jQuery('.og-grid'), // Optional, used for some extra CSS styling
		// offset: 16, Optional, the distance between grid items
		flexibleWidth: true, // Optional, the maximum width of a grid item,
		itemWidth: '32.7%'
	});

	jQuery( '.og-grid article' ).imagesLoaded( function() { jQuery( '.og-grid' ).animate({ opacity: 1.0 }, 750); } );
}

jQuery(window).load(function(){
	if( jQuery( window ).width() > 600 && !jQuery("body").hasClass( 'single' ) && !jQuery("body").hasClass( 'page' ) ){
		jQuery( '.og-grid article' ).imagesLoaded( function() { applyLayout(); } );
	} else if( undefined !== jQuery( '.og-grid article' ) ) {
		jQuery( '.og-grid' ).css('opacity', 1.0);
		if( jQuery( window ).width() > 600 ) {
			jQuery( '.og-grid article' ).imagesLoaded( function() { applyLayout(); } );
		}
	} else {
		jQuery( '.og-grid' ).css('opacity', 1.0);
	}
});