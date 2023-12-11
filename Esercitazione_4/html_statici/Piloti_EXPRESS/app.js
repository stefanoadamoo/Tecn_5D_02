const path = require('path');
var express = require('express');
var app = express();

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/italiani', function(req, res){
    res.sendFile(path.join(__dirname, 'italiani.html'))
});

app.get('/spagnoli', function(req, res){
    res.sendFile(path.join(__dirname, 'spagnoli.html'))
});

app.get('/francesi', function(req, res){
    res.sendFile(path.join(__dirname, 'francesi.html'))
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});