'use strict'

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var personaRoute = require('./routes/persona.route');

const socket = require ('socket.io');
const http = require('http');
const server = http.Server(app);
server.listen(3000);
const io = socket(server);

io.on('connection', (socket)=>{
    socket.emit('hello', {
        greeting:"hello Leo"
    })
})

    


app.use(bodyParser.urlencoded({useNewUrlParser:true}));
app.use(bodyParser.json());


app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.use('/api', personaRoute);



module.exports = app;