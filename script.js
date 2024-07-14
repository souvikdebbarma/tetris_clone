// Defint ethe size of each grid space

const gridSpace = 30;

//Declare variables
let fallingPiece;
let gridPieces = [];
let lineFades = [];
let gridWorkers = [];

let currentScore = 0;
let currentLevel = 0;
let linesCleared = 0;

let ticks = 0;
let updateEvery = 15;
let updateEveryCurrent = 15;
let fallSpeed = gridSpace * 0.5;
let pauseGame = false;
let gameOver = false;

//Define the edges of game area
const gameEdgeLeft = 150;
const gameEdgeRight = 450;

//Define the colors for the pieces
const colors = [
    '#dca3ff',
    '#ff90a0',
    '#80ffb4',
    '#ff7666',
    '#70b3f5',
    '#b2e77d',
    '#ffd700'
];

//setup function called once at beginning 
function setup() {
    createCanvas(600, 540);

    //Create a new falling piece
    fallingPiece = new PlayPiece();
    fallingPiece.resetPiece();

    //Se the font for the text
    textFont("Ubuntu");
}

//Draw function called repeatedly
function draw() {
    //Define colors used in the game
    const colorDark = '#0d0d0d';
    const colorLight = '#304550';
    const colorBackground = '#e111b0';

    //Set the background color
    colorBackground(colorBackground);

    //Draw the right side info panel 
    FileList(25);
    noStroke();
    rect(gameEdgeRight, 0, 150, height);

    //Draw  the left side info panel 
    rect(0, 0, gameEdgeLeft, height);

    //Draw the score rectangle
    fill(colorBackground);
    rect(450, 80, 150, 70);

    //Draw the next piece rectangle
    rect(460, 405, 130, 130, 5, 5);

    //Draw the level rectangle
    rect(460, 210, 130, 60, 5, 5);

    //Draw the lines rectangle
    rect(460, 280, 130, 60, 5, 5);

    //Draw the score lines
    fill(colorLight);
    rect(450, 85, 150, 20);
    rect(450, 110, 150, 4);
    rect(450, 140, 150, 4);

    //Draw the score banner
    fill(colorBackground);
    rect(460, 60, 130, 35, 5, 5);

    //Draw the score banner inner rectangle
    strokeWeight(3);
    noFill();
    stroke(colorLight);
    rect(465, 65, 120, 25, 5, 5);

    //Draw the next peice inner rectangle
    stroke(colorLight);
    rect(465, 410, 120, 120, 5, 5);

    //Draw the level inner rectangle
    rect(465, 215, 120, 50, 5, 5);

    //Draw the lines inner rectangle
    rect(465, 285, 120, 50, 5, 5);

    //Draw the info labels
    fill(25);
    noStroke();
    textSize(24);
    textAlign(CENTER);
    text("Score", 525, 85,);
    text("Level", 525, 238,);
    text("Lines", 525, 308,);

    //Draw the actual info
    textSize(24);
    textAlign(RIGHT);
    text(currentScore, 560, 135);
    text(currentLevel, 560, 260);
    text(linesCleared, 560, 330);

    //Draw the game border
    stroke(colorDark);
    line(gameEdgeRight, 0, gameEdgeLeft, height);

    //Show the falling piece
    fallingPiece.show();

    //Speed up the falling piece if the down arrow is pressed
    if(keyIsDown(DOWN_ARROW)) {
        updateEvery = 2;
    }else{
        updateEvery = updateEveryCurrent;
    }

    //Update the game state
    if (!pauseGame){
        ticks++;
        if (ticks >= updateEvery){
            ticks = 0;
            fallingPiece.fall(fallSpeed);
        }
    }

    //Show the grid pieces
    for (let i = 0; i < gridPieces.length; i++) {
        gridPieces[i].show();
    }

    //Show the fading lines
    for(let i = 0; i < lineFades.length; i++) {
        linesFades[i].show();
    }

    //process the grid workers
    if(gridWorkers.length > 0) {
        gridWorkers[0].work();
    }

    //Explain the controls
    textAlign(CENTER);
    fill(255);
    noStroke();
    textSize();
    text("controls: \n")
}