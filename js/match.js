/*
    Creation date: 14/01/2022
    Author: Andrade, J.V.

    This shall contain the server functions and global variables.

    Last update: 14/01/2022
    Comment: The global.js and the app.js have been split.
*/

var player1 = new Player('player1', 0, 0, 100, 200, '#0000FFFF');

document.onkeydown = function(e){
  let pressedKey = detectKey(e.key);

  if(pressedKey == " "){
      moveBall();
      loadBall();
  } else if(pressedKey != "none"){
      //movePlayer();
      loadPlayer("move", pressedKey, );
  } else {
      console.log("Press a valid key: a, w, s, d or space.");
  }
};

function loadPlayer(action, code, posX, posY){

  var playerPosX;
  var playerPosY;

  //var playerDimensions = calcPlayerSize();

  if(action == "init"){
      playerPosX = projectArea.width/2;
      playerPosY = projectArea.height/2;

  } else{
      console.log("Move player...")
      let currentPos =  movePlayer(code, playerPosX, playerPosY);

      playerPosX = currentPos[0];
      playerPosY = currentPos[1];
  }

  console.log(
      "X: " + playerPosX + "\n" +
      "Y: " + playerPosY + "\n" +
      "projectArea.width: " + projectArea.width + "\n" +
      "projectArea.height: " + projectArea.height
  );
  
    drawPlayer(player1);
}

function detectKey(code){
  let key;
  switch(code){
      case "a":
          key = "left";
          break;
      case "d":
          key = "right";
          break;
      case "s":
          key = "down";
          break;
      case "w":
          key = "up";
          break;
      case " ":
          key = "throw";
          break;
      default:
          key = "none";
          break;  
  }
  return key;
}

function movePlayer(code, posX, posY){
  console.log("calculating new position..."); 
  switch(code){
      case "left":
          posX = posX - 1;
          break;
      case "right":
          posX = posX + 1;
          break;
      case "down":
          posY = posY - 1;
          break;
      case "up":
          posY = posY + 1;
          break;
      default:
          break;  
  }
  return [posX, posY];
}

function moveBall(){
  console.log("Move ball");
}

function loadBall(){
  console.log("Load ball");
}

// SCADA Drawing Area and Elements
const canvas = document.getElementById("projectArea");                                              // Get the project area properties
const ctx = canvas.getContext("2d");                                                                // Defines a 2D plane to draw on it

// Settings
const delay = 1000;                                                                                 // Delay in ms prior to reloading projectArea
const targetRes = [1920, 1080];     																// Project area screen proportions (width by height)
const objDiv = 100;                                                                                 // Fraction of the screen to be set as object's 
const subDiv = 5;                                                                                   // How many divisions are inside the object's 

// Variables
var loadCounter = 0;                                                                                // Counts how many times the page has been loaded
var playerPosX;
var playerPosY;

// Events
window.onload = function(){                                                                         // Draws the design when page is loaded
    debounceEvent(delay);
}

window.onresize = function(){                                                                       // Draws the design when page is resized
    debounceEvent(delay);
}

// Functions
function main(){

    const project = drawCanvas(targetRes);
    const grid = drawGrid();
    loadPlayer("init", detectKey(), 0, 0);
}


function debounceEvent(SP){                                                                         // Filter extra unwanted events to save processing power
    loadCounter = loadCounter + 1;
    if(loadCounter == 1){
        setTimeout(function(){
            main();
        }, SP);
    }
}

function drawCanvas(resolution){

	const winW = window.innerWidth;																	// Internal window width
    const winH = window.innerHeight;																// Internal window height

    let maxW;											                							// Maximum canvas width
    let maxH;											    			            				// Maximum canvas height

    var canW;																						// Calculated canvas width
    var canH;																						// Calculated canvas height

	var canL;                                                                                       // Canvas distance from the left
	var canT;                                                                                       // Canvas distance from the top
    
    let projectRatio = resolution[0] / resolution[1];

    // Full Screen Mode
    if(window.innerHeight == screen.height){   
        maxW = screen.width;                                                                        // Max width is the same as screen width
        maxH = screen.height;                                                                       // Max height is the same as the screen height
        canW = screen.width;                                                                        // Canvas width is the same as screen width
        canH = screen.height;                                                                       // Canvas height is the same as screen height 

    } else {                                                                                        // Running in windowed mode to enable developing tools                                                   
        maxW = 0.8 * winW;                                                                          // Maximum width will be 80% of the actual screen width
        maxH = 0.8 * winH;                                                                          // Maximum height will be 80% of the actual screen height

        let canvasResult = calcCanvas(maxW, maxH, projectRatio)
        canW = canvasResult[0];
        canH = canvasResult[1];
    }

	ctx.canvas.width = canW;
	ctx.canvas.height = canH;

    canL = ((winW - canW) / 2) + "px";
    canT = ((winH - canH) / 2) + "px";

	canvas.style.left = canL;
    canvas.style.top = canT;

    loadCounter = 0;                                                                                // Reset count in order to perform function drawCanvas again when it's finished
}

function calcCanvas(maxW, maxH, projectRatio){
    let canW, canH;

    for(i = 0; i < maxW; i++) {                                                                     // Iterates actual canvas width until height reaches maximum height
        canW = i;
        canH = canW * (1/projectRatio);

       if (canH >= maxH){
           break;
       }
    }
    let result = [canW, canH];
    return result;
}

function drawGrid(){

    // Calculates centre of Canvas
    let midX = projectArea.innerWidth/2;
    let midY = projectArea.innerHeight/2;

    // Retrieves canvas' dimensions
    let prjW = projectArea.width;
    let prjH = projectArea.height;

    // Gets the maximum division size using Euclydes' theorem
    let euclid = [prjW, prjH];
    for(let ei = 0; ei < 10; ei++){

        //console.log(euclid);

        let euclidMax = Math.max(euclid[0], euclid[1]);
        let euclidMin = Math.min(euclid[0], euclid[1]);

        let difference = euclidMax - euclidMin;

        euclid = [difference, euclidMin];

    }

    let numV = (prjW / (prjW - prjH)) * 10;                                                         // number of vertical lines
    let numH = (prjH / (prjW - prjH)) * 10;                                                         // number of horizontal lines

    let stepV = prjW / numV;
    let stepH = prjH / numH;

    // Draw horizontal lines
    for(let j = 0; j < numH/2; j++){
        let stepY = j * (prjH / numH);
        ctx.strokeStyle = "#000000FF";
        ctx.beginPath();
        ctx.moveTo(0, midY + stepY);
        ctx.lineTo(prjW, midY + stepY);
        ctx.moveTo(0, midY - stepY);
        ctx.lineTo(prjW, midY - stepY);
        ctx.stroke();
        ctx.closePath();
    }

    // Draw vertical lines
    for(let i = 0; i < numV/2; i++){
        let stepX = i * (prjW / numV);
        ctx.strokeStyle = "#000000FF";
        ctx.beginPath();
        ctx.moveTo(midX + stepX, 0);
        ctx.lineTo(midX + stepX, prjH);
        ctx.moveTo(midX - stepX, 0);
        ctx.lineTo(midX - stepX, prjH);
        ctx.stroke();
        ctx.closePath();
    }
    
    let midH = prjW/2;
    let midV = prjH/2;

    // Draw horizontal line
    ctx.strokeStyle = "#FF0000FF";
    ctx.beginPath();
    ctx.moveTo(0, midV);
    ctx.lineTo(prjW, midV);
    ctx.stroke();
    ctx.closePath();

    // Draw vertical line
    ctx.strokeStyle = "#0000FFFF";
    ctx.beginPath();
    ctx.moveTo(midH, 0);
    ctx.lineTo(midH, prjH);
    ctx.stroke();
    ctx.closePath();

    let centreCircle = drawCircle(midH, midV, midH/10, "#00FF00FF");
    let lefCourt = drawCircle(0, midV, midH/2, "#FF0000FF");
    let rightCourt = drawCircle(2*midH, midV, midH/2, "#FF0000FF");
    let leftBasket = drawCircle(midH/20, midV, midH/20, "#FF7C00FF");
    let rightBasket = drawCircle((prjW - midH/20), midV, midH/20, "#FF7C00FF");
};

function drawCircle(posX, posY, radius, colour){

    // Draw circle in the middle
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.arc(posX, posY, radius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.closePath();

}