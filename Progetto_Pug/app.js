const express = require('express');
const PItaliani = require('./json/PItaliani.json'); 
const PFrancesi = require('./json/PFrancesi.json');
const PSpagnoli = require('./json/PSpagnoli.json');

const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/Public'));

app.get('/', (req, res) => {

    res.render('home', {
    title: 'Homepage',
    ita: PItaliani.italiani,
    fra: PFrancesi.francesi,
    spa: PSpagnoli.spagnoli
    });
});

app.get('/italiani', (req, res) => {
    res.render('piloti', {
    title: 'Piloti Italiani',
    pil: PItaliani.italiani
    });
});

app.get('/francesi', (req, res) => {
    res.render('piloti', {
        title: 'Piloti Francesi',
        pil: PFrancesi.francesi
    });
});
app.get('/spagnoli', (req, res) => {
    res.render('piloti', {
        title: 'Piloti Spagnoli',
        pil: PSpagnoli.spagnoli
    });
});

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});