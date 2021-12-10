/*
    Creation date: 01/06/2021
    Author: Andrade, J.V.

    This shall contain the server functions and global variables.

    Last update: 05/08/2021
    Comment: added header and document's
*/

const express = require('express');
const app = express();
const port = 3000;
var serveStatic = require('serve-static')


app.get('/', (req, res) => {
        res.send('Hello World!');
    }
);
  
app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    }
);

app.use(express.static('public'));