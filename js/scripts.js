//Business Logic
$(document).ready(function(){
  $("#question-board").submit (function(){
  var qOne = $("input:radio[name=q1]:checked").val();
  var qTwo = $("input:radio[name=q2]:checked").val();
  var qThree = $("input:radio[name=q3]:checked").val();
  var qFour = $("input:radio[name=q4]:checked").val();
  var qFive = $("input:radio[name=q5]:checked").val();
  var Result = 0;
  if (qOne ==="correct"){
    Result += 20;
  }
  else {
    Result +=0;
  }
  if (qTwo ==="correct"){
    Result += 20;
  }
  else {
    Result +=0;
  }
  if (qThree ==="correct"){
    Result += 20;
  }
  else {
    Result +=0;
  }
  if (qFour ==="correct"){
    Result += 20;
  }
  else {
    Result +=0;
  }
  if (qFive ==="correct"){
    Result += 20;
  }
  else {
    Result +=0;
  }
  function comments(Result){
    if(Result<= 49 ){
     comms = "You have scored poorly and you need to retake the test."
     return comms;
   }
    else if (Result>=50 && Result <80 ){
      comms = "You have fairly passed."
      return comms;
    }
    else {
      comms = "You have excellently passed."
    }
  }
  //User interface
$("#results").text("Your score is: "  +Result +"% " +comments(Result));
$("#results").show();
event.preventDefault();

});
});
