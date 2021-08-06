/*
    Creation date: 01/06/2021
    Author: Andrade, J.V.

    This shall contain the server functions and global variables.

    Last update: 05/08/2021
    Comment: added header and document's
*/

var globalVar1 = "Test3";

var http = require("http");

function onRequest(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello world!");
    response.end();
}

http.createServer(onRequest).listen(3000);