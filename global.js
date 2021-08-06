/*
    Creation date: 01/06/2021
    Author: Andrade, J.V.

    This shall contain the server functions and global variables.

    Last update: 05/08/2021
    Comment: added header and document's
*/

var globalVar1 = "Test3";

var http = require("http");
var fs = require("fs");

function onRequest(request, response){
    fs.readFile("index.html", function(err, data){
        response.writeHead(200, {"Contetn-Type": "text/html"});
        response.write(data);
        return response.end();
    });
}

http.createServer(onRequest).listen(3000);