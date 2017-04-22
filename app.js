var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http');
var path = require('path');

app.use(express.static(path.join(__dirname+'/public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/login', function(req, res){
  res.send("logged in");
});

var server = app.listen(1234, function(req, res){
  console.log('listening on 1234');
});

app.post('/login', function(req, res){

});
