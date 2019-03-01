$(document).ready(function() {
  $(".clickable").click(function() {
    $("#content-showing").slideToggle();
    $("#content-hidden").slideToggle();
  });
});
