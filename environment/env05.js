$("#creature").click(function() {
  $("#status").text("You clicked me! 🐾");
  $("#creature").css("background", "lavender");
});

$("#creature").hover(
  function() { $("#status").text("You’re close... 👀"); },
  function() { $("#status").text("You left me :("); }
);

$("#creature").dblclick(function() {
  $("#status").text("You woke me up!! 😳");
  $("#creature").css("transform", "scale(1.2)");
});

$(document).keydown(function(event) {
  $("#status").text("You pressed: " + event.key);
});

