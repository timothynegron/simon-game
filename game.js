// ┌────────────────────┐
// │   Global Variables │	
// └────────────────────┘
const buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];


// ┌─────────────────┐
// │   Main Program  │	
// └─────────────────┘



// ┌──────────────┐
// │   Functions  │	
// └──────────────┘
$(".btn").click(function(){
    
    // Get the id of the button that was clicked
    const userChosenColor = this.id;

    // Save the color in the array
    userClickedPattern.push(userChosenColor);

    // Play the sound of the color
    playSound(userChosenColor);
})

function nextSequence() {
    
    // Get a random number
    const randomNumber = Math.floor(Math.random() * 4);

    // Get a color
    const randomChosenColor = buttonColors[randomNumber];

    // Save the color in the array
    gamePattern.push(randomChosenColor);

    // Make the button flash
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);

    // Play the sound of the color
    playSound(randomChosenColor);
}

function playSound(color){
    const audio = new Audio(`sounds/${color}.mp3`);
    audio.play();
}