/*
	Creation date: 01/06/2021
	Author: Andrade, J.V.

	This document shall contain animations and processes common to all pages within the project.

	Last update: 26/06/2021
	Comment: added header and document's
*/

// SCADA Drawing Area and Elements
const canvas = document.getElementById("projectArea");												// Get the project area properties
const ctx = canvas.getContext("2d");																// Defines a 2D plane to draw on it

// Settings
const delay = 1000;																					// Delay in ms when window is resized
const ratio = 4/3;																					// Project area screen proportions (width by height)

var count = 0;
var resizeFlag = 0;

window.onload = function(){debounceResizeEvent(delay);};
window.onresize = function(){debounceResizeEvent(delay);};

function debounceResizeEvent(SP){
	//console.log("Delay is: " + SP + "ms");
	resizeFlag = 1;
	var drawNow = setTimeout(drawCanvas, SP);
	return drawNow;
}

function drawCanvas(){
	//console.log ("Canvas is being  drawn");

	var winW = window.innerWidth;
	var winH = window.innerHeight;
	var screenMode = null;
	var canvasMode = null;

	let protoW1 = 0.8 * winW;
	let protoH1 = protoW1 * (1/ratio);

	let protoW2 = 0.8 * winH;
	let protoH2 = protoW2 * ratio;

	var canW = 0;
	var canH = 0;

	switch(winW > winH){
		case true:
			canvasMode = 1;																			// Canvas will be landscape, here height is the constraint
			
			break;
		case false:
			canvasMode = 0;																			// Canvas will be portrait, here width is the constraint
			break;
		default:
			canvasMode = null																		// Canvas will adapt to screen
	}

	if(resizeFlag == 1){

		if(winW > winH){
			console.log("Landscape mode");
		}
		else if (winW < winH){
			console.log("Portrait mode");
		}
		else {
			console.log("Square screen");
		}

		const redrawCount = count++;
		
		console.log("Proto width 1 is: " + protoW1
		+ "\n" + "Proto height 1 is: " + protoH1
		+ "\n" + "Proto width 2 is: " + protoW2
		+ "\n" + "Proto height 2 is: " + protoH2
		//+ "\n" + "Orientation is: " + orientation
		+ "\n" + "Times loadded: " + count
		);

		// Reset resize flag when done
		resizeFlag = 0;
	}
}