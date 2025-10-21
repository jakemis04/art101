// declaring an array with name myCommutes
let myCommutes = ["sister", "UCSC taps bus", "Bcycle", "skateboard", "uber", "friends"];
    let myFavoriteCommute = {
        type: "UCSC taps bus",
        route: 18,
        print: "moutain lion",
        hasMiddleDoor: true,
        drivers:["Ed", "Edd","Eddie"],
    };
let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[1] + ", " + myCommutes[5] + "</p>";
megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavoriteCommute.type + ", route number " + myFavoriteCommute.route + ", the best driver: " + myFavoriteCommute.drivers[2] + "</p>";
$("#output").html(megaSentence);