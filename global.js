/*
    Creation date: 01/06/2021
    Author: Andrade, J.V.

    This shall contain the server functions and global variables.

    Last update: 05/08/2021
    Comment: added header and document's
*/

var globalVar1 = "Test3";

var html = require('html');

function onRequest(request, response){
    response.writeHead(200, {"content-type"})
}

http.createServer(onRequest).listen(3000);