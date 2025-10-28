let moveSet = ["Counter", "Bulk Up", "Close Combat", "Protect"];

let megaSentence;
megaSentence = "<p>"+ moveSet[0] +", "+ moveSet[1] +", "+ moveSet[2] +", "+ moveSet[3] +"</p>";
$("#output").html(megaSentence);
$("#output2").html(megaSentence);

function setBackground(imageFile, labelText) {
    $("body").css("background-image", `url('${imageFile}')`);
    $("#output3").html(labelText);
}

$("#bg1-button").click(function () {
    setBackground("pokemon_background_night.jpeg", "Seems like it's getting dark!");
});


$("#bg2-button").click(function () {
    setBackground("pokemon_background.jpeg", "Looks like a sunny morning!");
});