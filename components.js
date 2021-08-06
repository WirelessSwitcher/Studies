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

    let numV = (prjW / (prjW - prjH)) * 10;                                                // number of vertical lines
    let numH = (prjH / (prjW - prjH)) * 10;                                                // number of horizontal lines

    let stepV = prjW / numV;
    let stepH = prjH / numH;

    console.log("Width: " + prjW +
        "\n" + "Height: " + prjH +
        "\n" + "Vertical lines: " + numV +
        "\n" + "Horizontal lines: " + numH +
        "\n" + "StepV: " + stepV +
        "\n" + "StepH: " + stepH
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