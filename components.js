/*
    Creation date: 01/06/2021
    Author: Andrade, J.V.

    This document shall contain the instructions to draw components used in the project,
    such as valves, bar-graphs, buttons, trunnions, etc.

    Last update: 05/08/2021
    Comment: added header and document's
*/

function drawGrid(){

    let prjW = projectArea.width;
    let prjH = projectArea.height;

    let numV = Math.round(prjW / (prjW - prjH)) * 5;
    let numH = Math.round(prjH / (prjW - prjH)) * 5;

    console.log("Width: " + prjW +
        "\n" + "Height: " + prjH +
        "\n" + "Vertical lines: " + numV +
        "\n" + "Horizontal lines: " + numH
    );

    // Draw vertical lines
    for(let i = 0; i < numV; i++){
        let stepX = i * (prjW / numV);
        ctx.beginPath();
        ctx.moveTo(stepX, 0);
        ctx.lineTo(stepX, prjH);
        ctx.stroke();
    }

    // Draw horizontal lines
    for(let j = 0; j < numH; j++){
        let stepY = j * (prjH / numH);
        ctx.beginPath();
        ctx.moveTo(0, stepY);
        ctx.lineTo(prjW, stepY);
        ctx.stroke();
    }
};