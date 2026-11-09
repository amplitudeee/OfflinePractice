/*
    Gamelet: a starting point for writing games
    Author: Your Mother
    Version 1.0

    Instruxtions:
    Include gamelet.js in an HTML document containng an element with an id of 'ball'
    The script will detect when the left or right arrow key is pressed and will move the ball element accordingly.
*/

const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let positionUD = 0;
let positionTB = 0;

/*
handleKeyPress
responds to certain key presses by updating position.
*/
function handleKeyPress(e) {
    if (e.code === 'ArrowLeft') {
        positionUD = positionUD - 10;
    }
    if (e.code === 'ArrowRight') {
        positionUD = positionUD + 10;
    }
    if (e.code === 'ArrowUp') {
        positionTB = positionUD - 10;
    }
    if (e.code === 'ArrowDown') {
        positionTB = positionTB + 10;
    }
    if (positionUD < 0) {
        positionUD = 0;
    }
    if (positionTB < 0) {
        positionTB = 0;
    }

    refresh();
}

/*refresh
changes the position of the ball
*/
function refresh() {
    ball.style.left = positionUD + 'px';
    ball.style.top = positionTB + 'px';
}

