var express = require('express');
const people = require('./people.json');
var app = express();
app.set('view engine', 'pug'); 
app.use(express.static(__dirname + '/public')); 
app.get('/', function (req, res) {

    res.render('index', {
    title: 'Homepage',
    people: people.profiles,
    content : 'Questa pagina parla del mondo e di tanto altro'
    });
    });
app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});