document.onkeydown = function(e){
    let pressedKey = detectKey(e.key);

    if((pressedKey == "up") || (pressedKey == "down") || (pressedKey == "left") || (pressedKey == "right")){
        movePlayer();
        loadPlayer();
    }else{
        moveBall();
        loadBall();
    }
};

function loadPlayer(action, code){

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
        "Y: " + playerPosY);

    const player1 = new player(
        "player1", playerPosX, playerPosY, 10, 30, "#FF0000FF"
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