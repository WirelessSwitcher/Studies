const canvas = document.getElementById("projectArea");
const ctx = canvas.getContext("2d");
const ratio = 4/3;

const delay = 1000;																					// Delay in ms

var count = 0;
var resizeFlag = 0;

//window.onload = debounceResize(delay);
window.onresize = debounceResize;

function drawCanvas(){
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

function debounceResize(){
	var delayTime = parseInt(delay);
	console.log(delayTime);

	resizeFlag = 1;
	var iDontGetIt = setTimeout(drawCanvas, delayTime);
}