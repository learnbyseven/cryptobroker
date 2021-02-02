const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.listen(80);

//Routes
const homeRoute = require('./routes/home');
app.use(homeRoute);
//Serving static contents 
app.use(express.static(path.join(__dirname, 'public')));

