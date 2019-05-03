'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3977;
mongoose.connect('mongodb://localhost:27017/test', (err, res)=>{
    if(err){
        throw(err);
    }else{
        app.listen(port, () => {
            console.log('Server started on', port);
        });
    }
});