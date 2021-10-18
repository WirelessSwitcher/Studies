const controlPlayer = window.onkeydown(function (e){
    loadPlayer("load", e.keycode);
});

function loadPlayer(action, code){
    if(action = "init"){
        player1posX = projectArea.innerWidth/2;
        player1posY = projectArea.innerHeight/2;

    } else{
        let keypressed = detectKey(code);
        
        let currentPos =  movePlayer(keypressed);
        let currentPosX = currentPos[0];
        let currentPosY = currentPos[1];
    }

    const player1 = new player(
        "player1", currentPosX, currentPosY, 100, 300, "#FF0000FF"
    )
}

function detectKey(code){
    let key;
    switch(code){
        case 65:
            key ="left";
            break;
        case 68:
            key = "right";
            break;
        case 87:
            key = "down";
            break;
        case 83:
            key = "up";
            break;
        case 32:
            key: "space"
            break;
        default:
            key = "none"
            break;
    }
    return key;
}