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
gamePattern.push(randomChosenColor);
$(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
const audio = new Audio(`sounds/${randomChosenColor}.mp3`);
audio.play();



// ┌──────────────┐
// │   Functions  │	
// └──────────────┘
function nextSequence() {
    randomNumber = Math.floor(Math.random() * 4);
}
