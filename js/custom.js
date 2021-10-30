$(document).ready(function() {
    /* When the user scrolls down,then change  the navbar color.*/
  
  $(window).on('scroll',function() {
      if($(window).scrollTop()){
        $('.my-header').addClass('white');
      }
      else{
        $('.my-header').removeClass('white');
      }
      
    });

    // skill progressbar................................

    $(function skillsPogress() {
      $('.chart').easyPieChart({
        size:200,
        lineWidth:5,
        scaleColor: '#000000',
        barColor:"#f52225",
        trackColor:'#000',
        lineCap: 'circle',
        animate:2000,

      });
  
    });

       /*========== Owl Carousel Js Testimonial  ==========*/
       $(".owl-carousel").owlCarousel({
        items: 2, 
        autoplay: true,
        smartSpeed: 500,
        margin: 30,
        loop: true,
        autoplayHoverPause: true,
        responsiveClass: true,
          responsive: {
            0: {
                items: 1
            },
            991: {
                items: 2
            }
        }
    });

    // counterUp
    $('.counter').counterUp({
      delay:40,
      time:1500
  });
 

  // type js

var typed = new Typed('.typed', {
  strings: [
    "Web Designer.",
    "Web Developer.",
    "Freelancer."
  ],
  typeSpeed:50,
  backSpeed:50,
  startDelay:10,
  backDelay:1000,

  loop: true,
  // loopCount: Infinity,

  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,

});

//  mixitub filtering=================
  var mixer = mixitup('.filter');



// scroll top======================
   $('.totop').tottTop({
    scrollTop:2000,
    scrtollTopBtnDuration:600,
    duration:100,
});

// Wow JS
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       70,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();



// jq end



});








// ========Js Code
$( ".button_su_inner" ).mouseenter(function(e) {
    var parentOffset = $(this).offset(); 
   
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("desplode-circle");
    $(this).prev(".su_button_circle").addClass("explode-circle");
 
 });
 
 $( ".button_su_inner" ).mouseleave(function(e) {
 
      var parentOffset = $(this).offset(); 
 
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
      $(this).prev(".su_button_circle").removeClass("explode-circle");
      $(this).prev(".su_button_circle").addClass("desplode-circle");

  });

/*========== Start Portfolio Trigger Filterizr Js  ==========*/
  $("#control li").on('click', function () {
    $(this).addClass('active').siblings("li").removeClass('active');
});


// hamburger menu toggler
const toggle = document.getElementById("toggle");
        toggle.onclick = function (){
        toggle.classList.toggle("active");
        }

  

