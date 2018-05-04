const express = require('express')
bodyParser = require('body-parser')
controller = require('./controller')
massive = require('massive') 
require('dotenv').config();

const app = express();

app.use( bodyParser.json() );
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));




const port = 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );

