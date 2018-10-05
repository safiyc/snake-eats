// canvas portion of site:
let canvas = document.getElementById("canvas");
let snake = canvas.getContext("2d");    // 'getContext' is an html object, with properties and methods for drawing

snake.fillStyle = "black";
snake.fillRect(20, 20, 10, 10);     // x-cord, y-cord, width, height


// arrowkeys press
document.addEventListener("keydown", keyDown, false);

let rightArrowPressed = false;
let leftArrowPressed = false;
let upArrowPressed = false;
let downArrowPressed = false;

let snakeX = 20;
let snakeY = 20;
let snakeWidth = 10;
let snakeHeight = 10;

// for setInterval/clearInterval to prevent snake increases speed at repeated keydowns
let intervalControl;

function keyDown(event) {
    // keyCodes: right39, left37, up38, down40
    if (event.keyCode == 39 && leftArrowPressed != true) {
        rightArrowPressed = true;
        leftArrowPressed = false;
        upArrowPressed = false;
        downArrowPressed = false;
        console.log("right arrow is pressed");
    } else if (event.keyCode == 37 && rightArrowPressed != true) {
        rightArrowPressed = false;
        leftArrowPressed = true;
        upArrowPressed = false;
        downArrowPressed = false;
        console.log("left arrow is pressed");
    } else if (event.keyCode == 38 && downArrowPressed != true) {
        rightArrowPressed = false;
        leftArrowPressed = false;
        upArrowPressed = true;
        downArrowPressed = false;
        console.log("up arrow is pressed");
    } else if (event.keyCode == 40 && upArrowPressed != true) {
        rightArrowPressed = false;
        leftArrowPressed = false;
        upArrowPressed = false;
        downArrowPressed = true;
        console.log("down arrow is pressed");
    }

    // reset moveSnake()'s setInterval, then run it again
    clearInterval(intervalControl);
    moveSnake();
}

// snake continues to move after arrow key is released
function moveSnake() {
    intervalControl = setInterval(function () {
        snake.clearRect(0, 0, canvas.width, canvas.height);
        if (rightArrowPressed) {
            snakeX++;
            snake.fillRect(snakeX, snakeY, snakeWidth, snakeHeight);
        }
        if (leftArrowPressed) {
            snakeX--;
            snake.fillRect(snakeX, snakeY, snakeWidth, snakeHeight);
        }
        if (upArrowPressed) {
            snakeY--;       // Why 'up' is 'snakeY--'? Logically should be 'snakeY++'?
            snake.fillRect(snakeX, snakeY, snakeWidth, snakeHeight);
        }
        if (downArrowPressed) {
            snakeY++;
            snake.fillRect(snakeX, snakeY, snakeWidth, snakeHeight);
        }
    }, 20);
}
