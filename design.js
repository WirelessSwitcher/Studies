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
const delay = 1000;																					// Delay in ms prior to reloading projectArea
const currentProjectRatio = 4/3;																	// Project area screen proportions (width by height)

// Variables
var count = 0;																						// Counts how many times the page has been loaded

// Events
window.onload = function(){debounceEvent(delay);};													// Draws the design when page is loaded
window.onresize = function(){debounceEvent(delay);};												// Draws the design when page is resized

function debounceEvent(SP){
	count = count + 1;
	setTimeout(function(){
		drawCanvas(currentProjectRatio);
	}, SP);
}

function drawCanvas(projectRatio){

	// Check currentmost dimensions
	winW = window.innerWidth;
	winH = window.innerHeight;

	if(count != 0){

		let screenOrientation;
		var screenRatio = winW / winH;

		switch(true) {
			case screenRatio > 1:
				screenOrientation = 0;																// Landscape
			break;
			case screenRatio < 1 :
				screenOrientation = 1;																// Portrait
			break;
			default:
				screnOrientation = 2;																// Square
			break;
		}

		switch(true) {
			case projectRatio > 1:
				projectOrientation = 0;																// Landscape
			break;
			case projectRatio < 1 :
				projectOrientation = 1;																// Portrait
			break;
			default:
				projectOrientation = 2;																// Square
			break;
		}

		//if(screenRatio < projectRatio){															// If screen is narrower than project
			ctx.canvas.width = 0.8 * winW;
			console.log("ctx.canvas.width is " + ctx.canvas.width);

			canW = document.getElementById("projectArea").width;
			console.log("canW is: " + canW);

			ctx.canvas.height = canW / 2;
			console.log("ctx.canvas.height is " + ctx.canvas.height);

			canH = document.getElementById("projectArea").height;
			console.log("canH is: " + canH);
		//}

		count = 0;

		drawGrid();
	}
}