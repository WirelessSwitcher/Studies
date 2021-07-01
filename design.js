var canvas = document.getElementById("projectArea");
var winW = window.innerWidth;
var winH = window.innerHeight;
var ratio = 4/3;

var delay = setInterval()

drawCanvas(winW, winH, ratio);

function drawCanvas(extW, extH, factor){

    let canW = 0;
    let canH = 0;

    let protoW1 = 0.8 * extW;
    let protoH1 = protoW1 * (1/factor);

    let protoW2 = 0.8 * extH;
    let protoH2 = protoW2 * factor;

    if(extW > extH){
        console.log("Landscape mode");
    }
    else if (extW < extH){
        console.log("Portrait mode");
    }
    else {
        console.log("Square screen");
    }
};