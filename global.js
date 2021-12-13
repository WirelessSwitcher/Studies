/*
    Creation date: 10/12/2021
    Author: Andrade, J.V.

    This shall contain the server functions and global variables.

    Last update: 05/08/2021
    Comment: added header and document's
*/

const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
});

// serve your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

var player1 = new player('player1', 0, 0, 100, 200, '#0000FFFF');

document.onkeydown = function(e){
  let pressedKey = detectKey(e.key);

  if(pressedKey == " "){
      moveBall();
      loadBall();
  } else if(pressedKey != "none"){
      //movePlayer();
      loadPlayer("move", pressedKey, );
  } else {
      console.log("Press a valid key: a, w, s, d or space.");
  }
};

function loadPlayer(action, code, posX, posY){

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
      "Y: " + playerPosY + "\n" +
      "projectArea.width: " + projectArea.width + "\n" +
      "projectArea.height: " + projectArea.height
  );

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