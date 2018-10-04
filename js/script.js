// canvas portion of site:
let canvas = document.getElementById("canvas");
let snake = canvas.getContext("2d");      // 'getContext' is an html object, with properties and methods for drawing

snake.fillStyle = "black";
snake.fillRect(20, 20, 10, 10);       // x-cord, y-cord, width, height

// arrowkeys press
document.addEventListener("keydown", keyDown);

let rightArrowPressed = false;
let leftArrowPressed = false;
let upArrowPressed = false;
let downArrowPressed = false;

function keyDown(event) {
    if(event.keyCode == 39) {
        rightArrowPressed = true;
        console.log("right arrow is pressed");
    } else if(event.keyCode == 37) {
        leftArrowPressed = true;
        console.log("left arrow is pressed");
    } else if(event.keyCode == 38) {
        upArrowPressed = true;
        console.log("up arrow is pressed");
    } else if(event.keyCode == 40) {
        downArrowPressed = true;
        console.log("down arrow is pressed");
    }
}


