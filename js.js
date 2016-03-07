

var init = function() {
    var carousel = document.getElementById('carousel'),
        navButtons = document.querySelectorAll('#navigation button'),
        panelCount = carousel.children.length,
        transformProp = Modernizr.prefixed('transform'),
        theta = 0,
        carouselDelay = 250,

        carouselAdvance = function( event ){
            theta += ( 360 / panelCount ) * +1;
            carousel.style[ transformProp ] = 'translateZ( -115px ) rotateX(' + theta + 'deg)';
        },
        carouselInterval = setInterval(carouselAdvance, carouselDelay);
};

document.addEventListener( 'DOMContentLoaded', init, false);

x = 200;
y = 200;
window.onkeydown = function (e) { if (!e) { e = document.event; }
var code = event.keyCode;
console.log(code)
if 	( code == 37 ){ x = x - 20; }
else if ( code == 39 ){ x = x + 20; }
else if ( code == 38 ){ y = y - 20; }
else if ( code == 40 ){ y = y + 20; }
var div1 = document.getElementById("div1");
 div1.style.top = y + "px"; 
 div1.style.left = x + "px"; 
}




// console.log("java1");

// var init = function() {
//   var carousel = document.getElementById('carousel'),
//   navButtons = document.querySelectorAll('nav button'),
//   panelCount = carousel.children.length,
//   transformProp = Modernizr.prefixed('transform'),
//   theta = 0,
//     onNavButtonClick = function( event ){
//       var increment = parseInt( event.target.getAttribute('data-increment') );
//       theta += (360 / panelCount) * increment * -1;
//       carousel.style[ transformProp ] = 'translateZ( -288) rotateY(' + theta + 'deg)';
//        };

//        for (var i=0; i < 2; i++) {
//         navButtons[i].addEventListener( 'click', onNavButtonClick, false);
       
//     }
// }
// window.addEventListener('DOMContentLoaded', init, false);

// ----------          
// var tz = Math.round( ( panelSize / 2 ) / 
//   Math.tan( ( ( Math.PI * 2 ) / numberOfPanels ) / 2 ) );
// // or simplified to
// var tz = Math.round( ( panelSize / 2 ) / 
//   Math.tan( Math.PI / numberOfPanels ) );