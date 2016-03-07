x = 200;
y = 200;
window.onkeydown = function (e) { if (!e) { e = document.event; }
var code = e.keyCode;
console.log(code)
if 	( code == 37 ){ x = x - 10; }
else if ( code == 39 ){ x = x + 10; }
else if ( code == 38 ){ y = y - 10; }
else if ( code == 40 ){ y = y + 10; }
var div1 = document.getElementById("div1");
 div1.style.top = y + "px"; 
 div1.style.left = x + "px"; 
}






// function press(){

// 	if 	( code == 37 ){ div1.style.left = left + 10 + 'px'; }
// }

// var div1 = document.querySelector("#div1.left");

// console.log(div1)

// document.onkeydown = function(e) { 
// 	if (!e) { e = document.event; 
// 		console.log(code);
// }
// var code = e.keyCode;

// var div1 = document.querySelector("#div1");
//  var top = parseInt (div1.style.top, 10); 
//  var left = parseInt (div1.style.left, 10);
// console.log(div1, top, left, code);

// if ( code == 37 && left > 0 )  { div1.style.left = left - 10 + 'px'; };


//  else if ( code == 38 ) {
// if ( top > 0 ) { div1.style.top = top - 10 + 'px'; } } 
// else if ( code == 39 ) {
// if ( left+div1.width+10 < document.innerWidth ) { div1.style.left = left + 10 + 'px'; } } 
// else if ( code == 40 ) 
// 	{ ( top+div1.height+10 < document.innerHeight ) { div1.style.top = top + 10 +'px'; }}




	



// var top = document.getElementById("div1").style.top
// console.log(top)


// document.getElementById("div1").onclick = function(){
//         document.getElementById("div1").style.top = parseInt(("div1").style.top) + 5 + 'px';
//         console.log(top);
//     };




        //     function leftArrowPressed() {
        //     var element = document.getElementById("div1");
        //     element.style.left = parseInt(element.style.left) - 5 + 'px';
        //      console.log(element)

        //     }

        //     function rightArrowPressed() {
        //     var element = document.getElementById("div1");
        //     element.style.left = parseInt(element.style.left) + 5 + 'px';

        //     }

        //     function upArrowPressed() {
        //     var element = document.getElementById("div1");
        //     element.style.top = parseInt(element.style.top) - 5 + 'px';
        //     }

        //     function downArrowPressed() {
        //     var element = document.getElementById("div1");
        //     element.style.top = parseInt(element.style.top) + 5 + 'px';
        //     }

        //     function moveSelection(evt) {
        //         switch (evt.keyCode) {
        //             case 37:
        //             leftArrowPressed();
        //             break;
        //             case 39:
        //             rightArrowPressed();
        //             break;
        //             case 38:
        //             upArrowPressed();
        //             break;
        //             case 40:
        //             downArrowPressed();
        //             break;
        //             }
        //         };

        // function docReady()
        // {
          
        //   window.addEventListener('keydown', moveSelection);
        // }





	















// var left = 0;
// function move(){

		
		
// 		var ek = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;	
// 		console.log(ek)

// 		if (ek==37){ div1.style.bottom = div1.style.left.replace('px','')*1)+5;
// console.log(div1);



		// if (ek==39) document.getElementById('div1').style.left=(document.getElementById('div1').style.left.replace('px','')*1)+5;
		// if (ek==38) document.getElementById('div1').style.top=(document.getElementById('div1').style.top.replace('px','')*1)-5;
		// if (ek==40) document.getElementById('div1').style.top=(document.getElementById('div1').style.top.replace('px','')*1)+5;
// }



// var left = 0;
// var bottom = 0;
// var movement = "right";
// var upDown = "up";

// // function random
// var rand = Math.round(Math.random() * 13 + 2);


// var walkRight = setInterval(function(){
//  catHouse.style.left = left + "px";
//  if(movement == "right"){
//   cat.style.height = '500px';
//   cat.style.width = '500px';
//   cat.style.transitionDuration = "1s"
//   if (left <= window.innerWidth - 300)
//    {   left += rand;    }
//  else {  movement = "left";
//  cat.style.height = '150px';
//  cat.style.width = '150px';
//  cat.style.transitionDuration = "1s"
//  catHouse.className = "left";       }
// } else {
//   if (left >= 0)
//    {     left -= rand;
//    } else {
//     movement = "right";
//     catHouse.className = "right";}}},20);

// var walkRight = setInterval(function(){
//  catHouse.style.bottom = bottom + "px";
//  if(upDown == "up"){
//    if (bottom <= window.innerHeight - 250){
//      bottom += 10;
//    } else { upDown = "down"; }

