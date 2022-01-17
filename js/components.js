/*
    Creation date: 01/06/2021
    Author: Andrade, J.V.

    This document shall contain the instructions to draw components used in the project,
    such as valves, bar-graphs, buttons, trunnions, etc.

    Last update: 14/01/2022
    Comment: added header and document's
*/

class System_DT{
    constructor(screenHeight, screenWidth, inputMethod){
        this.screenHeight = screenHeight;
        this.screenWidth = screenWidth;
    }
    
    ratio() {
        let ratio = this.screenHeight / this.screenWidth;
        return ratio;
    }

    orientation(){
        let orientation;
    
        if (ratio > 1){
            orientation = false;   // Portrait
        } else {
            orientation = true;   // Landscape or square
        }

        return orientation;
    }
}

class Player{
    constructor(playerID, playerX, playerY,  playerW, playerH, playerColour){
        this.id = playerID;
        this.left = playerX;
        this.top = playerY;
        this.width = playerW;
        this.height = playerH;
        this.colour = playerColour;
    }
}

function drawPlayer(player){
    console.log("Drawing " + player.id);
    ctx.beginPath();
    ctx.strokeStyle = "#000000FF";
    ctx.rect(player.left, player.top, player.width, player.height);
    ctx.fillStyle = player.colour;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawPlayground(client){
    let ratio = client.screen[0]/client
}