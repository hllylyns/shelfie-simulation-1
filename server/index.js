const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller');

const app = express();

app.use( bodyParser.json() );




const port = 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );

