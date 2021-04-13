// ┌────────────────────┐
// │   Global Variables │	
// └────────────────────┘
const buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let randomNumber;
let randomChosenColor;


// ┌─────────────────┐
// │   Main Program  │	
// └─────────────────┘
nextSequence();
randomChosenColor = buttonColors[randomNumber];



// ┌──────────────┐
// │   Functions  │	
// └──────────────┘
function nextSequence() {
    randomNumber = Math.floor(Math.random() * 4);
}
