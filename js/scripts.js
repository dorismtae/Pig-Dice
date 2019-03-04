//Business Logic
var turnTotal1 = 0
var total1 = 0
var turnTotal2 = 0
var total2 = 0

function disable () {
  document.getElementById("1").disabled=true;
  document.getElementById("3").disabled=false;
  turnTotal1=0
}

function enable () {
  document.getElementById("3").disabled=true;
  document.getElementById("1").disabled=false;
  turnTotal2=0
}

function endGame () {
  document.getElementById("1").disabled=true;
  document.getElementById("3").disabled=true;
}
//User Interface
$(document).ready(function() {
$("button#1").click (function(){
  var rolled = Math.floor((Math.random() * 6) +1)
  $("p#currentroll").text("Current Roll: " + rolled);

if (rolled!= 1){
  turnTotal1 += rolled
}
else{
  alert("Sorry you rolled a 1")
  disable ()
}
$("p#points").text("Points: "+ turnTotal1);
});

$("button#3").click (function(){
  var rolled = Math.floor((Math.random() * 6) +1)
  $("p#currentroll1").text("Current Roll: " + rolled);

if (rolled!= 1){
  turnTotal1 += rolled
}
else{
  alert("Sorry you rolled a 1")
  disable ()
}
$("p#points1").text("Points: "+ turnTotal1);
});

  });
$("button#2").click(function() {
  total1 += turnTotal1
  alert(total1)
  if (total1==100 || total1>100){
    alert("Player 1 has won")
    endGame()
  }
  else{
    turnTotal1=0
    disable ()
  }
  $("p#points").text("Turn total :" +turnTotal1)
});
$("button#4").click(function() {
  total2 += turnTotal2
  alert(total2)
  if (total2==100 || total2>100){
    alert("Player 2 has won")
    endGame()
  }
  else{
    disable()
  }
  $("p#points1").text("Turn total :" +turnTotal1)
});
