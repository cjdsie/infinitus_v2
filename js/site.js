$(function() {
	Grid.init();
});


  $('[data-typer-targets]').typer();


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



function setPostHeights() {
  var fullPagePostRatio = 1/2;
  var featureRatio = 2/3;
  var doubleTallRatio = 2/3;
  var doubleWideRatio = 2/3;
  var doubleWideRightRatio = 2/3;

  var fullPagePost =$('.fullpage-post')
  var featurePost = $(".feature");
  var doubleTallPost = $(".doubletall-post");
  var doubleWidePost = $(".audio");
  var doubleWideRightPost = $(".doublewide-right-post");

  var fullPagePostWidth = fullPagePost.width();
  var featurePostWidth = featurePost.width();
  var doubleTallPostWidth = doubleTallPost.width();
  var doubleWidePostWidth = doubleWidePost.width();
  var doubleWideRightPostWidth = doubleWideRightPost.width();

  var fullPagePostHeight = fullPagePostWidth * fullPagePostRatio;
  var featurePostHeight = featurePostWidth * featureRatio;
  var doubleTallPostHeight = featurePostHeight;
  var doubleWidePostHeight = featurePostHeight/2;
  var doubleWideRightPostHeight =  doubleWidePostHeight;


//    alert(doubleWidePostHeight);

  if($(window).width()>767){
    featurePost.css({'height': featurePostHeight});
    fullPagePost.css({'height': fullPagePostHeight});
    doubleTallPost.css({'height': doubleTallPostHeight});
    doubleWidePost.css({'height': doubleWidePostHeight});
    doubleWideRightPost.css({'height': doubleWideRightPostHeight});
  } else {
    featurePost.css({'height': ''});
    fullPagePost.css({'height': ''});
    doubleTallPost.css({'height': ''});
    doubleWidePost.css({'height': ''});
    doubleWideRightPost.css({'height': ''});
  }
}


// bg mask width
  function compareWidth() {
    var baMaskWidth = $(".compare").width();

    $(".ba-mask").css("background-size", baMaskWidth);
  }
  compareWidth();

$(window).on("resize",function(){
    setPostHeights();
});


// Screen Resize functions

$(window).resize(function() {
  positionGallery();
  compareWidth();
 });


setPostHeights();
var $container = $('#og-grid');
// initialize
$container.masonry({
  "containerStyle": null,
  "gutter": 0,
  "itemSelector": 'article',
  "columnWidth":1,
  "transitionDuration": 0
});



$('#signup_btn').click(function(e) {
    $('#sign_up').lightbox_me({
        centered: true, 
        onLoad: function() { 
            $('#sign_up').find('input:first').focus()
            }
        });
    e.preventDefault();
});