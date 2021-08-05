/*
    Creation date: 01/06/2021
    Author: Andrade, J.V.

    This document shall contain animations and processes common to all pages within the project.

    Last update: 05/08/2021
    Comment: added header and document's
*/

// SCADA Drawing Area and Elements
const canvas = document.getElementById("projectArea");                                              // Get the project area properties
const ctx = canvas.getContext("2d");                                                                // Defines a 2D plane to draw on it

// Settings
const delay = 1000;                                                                                 // Delay in ms prior to reloading projectArea
const currentProjectRatio = 4/3;                                                                    // Project area screen proportions (width by height)

// Variables
var count = 0;                                                                                      // Counts how many times the page has been loaded

// Events
window.onload = function(){                                                                         // Draws the design when page is loaded
    debounceEvent(delay);
}

window.onresize = function(){                                                                       // Draws the design when page is resized
    debounceEvent(delay);
}

// Filter extra unwanted events to save processing power
function debounceEvent(SP){
    count = count + 1;
    if(count == 1){
        setTimeout(function(){
            drawCanvas(currentProjectRatio);
        }, SP);
    }
}

function drawCanvas(projectRatio){

	const winW = window.innerWidth;																	// Internal window width
    const winH = window.innerHeight;																// Internal window height

    const maxW = 0.8 * winW;																		// Maximum canvas width
    const maxH = 0.8 * winH;																		// Maximum canvas height

    var canW;																						// Calculated canvas width
    var canH;																						// Calculated canvas height

	var canL;
	var canT;

    for(i = 0; i < maxW; i++) {
		canW = i;
        canH = canW * (1/projectRatio);

       if (canH >= maxH){
           break;
       }
    }

	ctx.canvas.width = canW;
	ctx.canvas.height = canH;

    canL = ((winW - canW) / 2) + "px";
    canT = ((winH - canH) / 2) + "px";

	canvas.style.left = canL;
    canvas.style.top = canT;

	/*console.log
		"winW is: " + winW
		+ "\n" + "winH is: " + winH
		+ "\n" + "maxW is: " + maxW
		+ "\n" + "maxH is: " + maxH
		+ "\n" + "canW is: " + canW
		+ "\n" + "canH is: " + canH
		+ "\n" + "canL is: " + canL
		+ "\n" + "canT is: " + canT
	);*/

    count = 0;                                                                                      // Reset count in order to perform function drawCanvas again when it's finished
    drawGrid();
}

/*
var fileReader = new FileReader();
fileReader.onload = function(e){
    var fileContents = document.getElementById('title');
    fileContents.innerHTML = filerReader.result;
}
fileReader.readAsText(text.blob);
*/