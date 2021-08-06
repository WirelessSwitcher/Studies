/*
    Creation date: 01/06/2021
    Author: Andrade, J.V.

    This shall contain the server functions and global variables.

    Last update: 05/08/2021
    Comment: added header and document's
*/

var http = require("http");
var fs = require("fs");

function onRequest(request, response){
    response.writeHead(200, {"Contetn-Type": "text/plain"});
    fs.readFile("./index.html", null, function(error, data){
        if(error){
            response.writeHead(404);
            response.write("File not found!")
        }else{
            response.write(data);
        }
        return response.end();
    });
}

http.createServer(onRequest).listen(3000);