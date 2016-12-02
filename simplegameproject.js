// randomNumber returns a random number between min and max
function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}
var timeStop;
var foodEaten = 0;
var timeStart  = Date.now()
var gameOver = false;
////////////////////////////bird's movement///////////////////
document.addEventListener("keydown", function(e){
 var birdSpotX = Number(document.getElementById("bird").getAttribute("x"));
 var birdSpotY = Number(document.getElementById("bird").getAttribute("y"));
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

//////////////////////////////////overlap//////////////////////////////////////////////////////

var totaltime;

 var foodX = Number(document.getElementById("foodfirst").getAttribute("x"));
 var foodY = Number(document.getElementById("foodfirst").getAttribute("y"));

 if (birdSpotX > foodX && birdSpotX < foodX + 65 && birdSpotY > foodY && birdSpotY < foodY + 65){
  var randX = randomNumber(30,500)
  document.getElementById("foodfirst").setAttribute("x", randX)
  foodEaten = foodEaten+1
  document.getElementById("score").textContent = foodEaten
 console.log("overlap")
};

//second ovverlap

foodX = Number(document.getElementById("foodsecond").getAttribute("x"));
foodY = Number(document.getElementById("foodsecond").getAttribute("y"));

 if (birdSpotX > foodX && birdSpotX < foodX + 65 && birdSpotY > foodY && birdSpotY < foodY + 65){
   randX = randomNumber(30,500)
   document.getElementById("foodsecond").setAttribute("x", randX)
   foodEaten = foodEaten+1
   document.getElementById("score").textContent = foodEaten
 console.log("overlap")
};

if (foodEaten >= 5){
  document.getElementById("screen").pauseAnimations()
   timeStop = Date.now();
  document.getElementById("totaltime").textContent = (timeStop - timeStart)/1000;
  document.getElementById("gg").setAttribute("opacity", "1")
}
  if(gameOver == false){

  }
  else{

  }

 })
