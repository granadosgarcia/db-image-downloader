var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Story = require('./story');

mongoose.connect('mongodb://localhost/stories_migration');



app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(4200, function(){
    console.log('Ready');
});
