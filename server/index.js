const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');

const app = express();

app.use( bodyParser.json() );
app.use(cors());
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

const BaseUrl = "/api/inventory";
app.get( BaseUrl, controller.read );
app.post( '/api/product', controller.create );
app.delete( `${BaseUrl}/:id`, controller.delete );
// app.put( `${BaseUrl}/:id`, controller.update );



const port = 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );

