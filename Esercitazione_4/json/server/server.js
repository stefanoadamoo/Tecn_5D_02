const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
var cors = require('cors'); //HTTP access control (CORS) for cross origin requests
app.use(cors()); //Setup cors
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api response

app.get('/api', (req, res) => {
    var jsonData = {
      "italiani":[
         {
            "nome":"Francesco Bagnaia",
            "altezza":176,
            "peso":67,
            "squadra":"Ducati Lenovo Team"
         },
         {
            "nome":"Luca Marini",
            "altezza":184,
            "peso":69,
            "squadra":"Repsol Honda Team"
         },
         {
            "nome":"Franco Morbidelli",
            "altezza":176,
            "peso":67,
            "squadra":"Prima Pramac Racing"
         },
         {
            "nome":"Enea Bastianini",
            "altezza":168,
            "peso":64,
            "squadra":"Ducati Lenovo Team"
         },
         {
            "nome":"Fabio Di Giannantonio",
            "altezza":175,
            "peso":68,
            "squadra":"Pertamina Enduro VR46 MotoGP™ Team"
         },
         {
            "nome":"Marco Bezzecchi",
            "altezza":174,
            "peso":61,
            "squadra":"Pertamina Enduro VR46 MotoGP™ Team"
         }
      ],
      "spagnoli":[
         {
            "nome":"Maverick Viñales",
            "altezza":175,
            "peso":70,
            "squadra":"Squadra XYZ"
         },
         {
            "nome":"Nome Pilota",
            "altezza":171,
            "peso":64,
            "squadra":"Aprilia Racing"
         },
         {
            "nome":"Nome Pilota",
            "altezza":175,
            "peso":70,
            "squadra":"Squadra XYZ"
         },
         {
            "nome":"Nome Pilota",
            "altezza":175,
            "peso":70,
            "squadra":"Squadra XYZ"
         },
         {
            "nome":"Nome Pilota",
            "altezza":175,
            "peso":70,
            "squadra":"Squadra XYZ"
         },
         {
            "nome":"Nome Pilota",
            "altezza":175,
            "peso":70,
            "squadra":"Squadra XYZ"
         },
         {
            "nome":"Nome Pilota",
            "altezza":175,
            "peso":70,
            "squadra":"Squadra XYZ"
         }
      ],
      "francesi":[
         {
            "nome":"Johann Zarco",
            "altezza":171,
            "peso":68,
            "squadra":"LCR Honda"
         },
         {
            "nome":"Fabio Quartararo",
            "altezza":177,
            "peso":64,
            "squadra":"Monster Energy Yamaha MotoGP™"
         }
      ]
   };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
    });

const port = process.env.PORT || '3000';
app.set('port', port);
/**
* Listen on provided port, on all network interfaces.
*/
app.listen(port, () => {console.log('Example app listening on port 3000!');});