////////////////////////////bird's movement///////////////////
document.addEventListener("keydown", function(e){
 var birdSpotX = Number(document.getElementById("bird").getAttribute("x"));
 var birdSpotY = Number(document.getElementById("bird").getAttribute("y"));
 var foodX = Number(document.getElementById("foodfirst").getAttribute("x"));
 var foodY = Number(document.getElementById("foodfirst").getAttribute("y"));
 var width = 65;
 var height = 65;

 if (e.keyCode == 37) {
   document.getElementById("bird").setAttribute("x", birdSpotX - 15)
  birdSpotX = birdSpotX - 15;
 }

 else if (e.keyCode == 39) {
  document.getElementById("bird").setAttribute("x", birdSpotX + 15)
  birdSpotX = birdSpotX + 15;
 }
 if (e.keyCode == 38) {
   document.getElementById("bird").setAttribute("y", birdSpotY - 15)
  birdSpotY = birdSpotY - 15;
 }

 else if (e.keyCode == 40) {
  document.getElementById("bird").setAttribute("y", birdSpotY + 15)
  birdSpotY = birdSpotY + 15;
 }

if (birdSpotX > foodX && birdSpotX < foodX + 65 && birdSpotY > foodY && birdSpotY < foodY + 65){
console.log("overlap")
}

//second ovverlap

var foodX = Number(document.getElementById("foodsecond").getAttribute("x"));
var foodY = Number(document.getElementById("foodsecond").getAttribute("y"));

 if (birdSpotX > foodX && birdSpotX < foodX + 65 && birdSpotY > foodY && birdSpotY < foodY + 65){
 console.log("overlap")
}
 })

/////////////////////////////////////////overlap/////////////////////////////////////////
