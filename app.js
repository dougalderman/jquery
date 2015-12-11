/* alert('hi'); */
/* window.setTimeout(function() {
  $("h1").css("color", "green");
}, 1000); */  // applies globally

window.setTimeout(function() {
  $("#rock").css("color", "green");
}, 1000);  // only applies to id rock

window.setTimeout(function() {
  $("#rock").remove();
}, 2000);  // removes ID rock

$('#change-text').on('click', function() {
	$('#change-text').html('Something else');  // Chnages text to 'Something else' when user clicks button.
});
