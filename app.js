/*
    Creation date: 10/12/2021
    Author: Andrade, J.V.

    This shall contain the server functions and global variables.

    Last update: 14/01/2022
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