// ┌────────────────────┐
// │   Global Variables │	
// └────────────────────┘
const buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];
let gameHasNotStarted = true;
let level = 0;

// ┌──────────────┐
// │   Functions  │	
// └──────────────┘

$(document).keypress(function(event){
    if(event.keyCode === 97 && gameHasNotStarted === true){
        gameNotStarted = false;
        nextSequence();
        $("h1").text("Level" + " " + level)
    }
})

$(".btn").click(function(){
    
    // Get the id of the button that was clicked
    const userChosenColor = this.id;

    // Save the color in the array
    userClickedPattern.push(userChosenColor);

    // Play the sound of the color
    playSound(userChosenColor);

    // Animate the button when clicked
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
})

function nextSequence() {

    // Increase the level by one
    level++;

    // Update h1
    $("h1").text("Level" + " " + level);
    
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

function animatePress(currentColor){
    $(`#${currentColor}`).addClass("pressed");

    setTimeout(function(){
        $(`#${currentColor}`).removeClass("pressed")
    }, 100)
}

function checkAnswer(currentLevel){

    // Check if the user is getting the pattern correct
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        
        // Check if user finished the pattern
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000)

            // Reset user clicked pattern
            userClickedPattern = [];
        }
    }
    // If pattern is incorrect
    else{
        // Play wrong sound
        const audio = new Audio(`sounds/wrong.mp3`);
        audio.play();

        // Animation
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        // Reset title
        $("h1").text("Press A Key to Restart")

        // Reset Variables
        startOver();
    }
}

function startOver(){
    
    // Reset variables
    level = 0;
    userClickedPattern = [];
    gamePattern = [];
}