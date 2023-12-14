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
            "squadra":"Ducati Lenovo Team",
            "pathImmagine": "https://resources.motogp.pulselive.com/photo-resources/2023/06/15/a5b9d197-c272-45e1-8ea4-d1d5ca54ff77/YW9dAEBJ.png"
  
         },
         {
            "nome":"Luca Marini",
            "altezza":184,
            "peso":69,
            "squadra":"Repsol Honda Team",
            "pathImmagine": "https://resources.motogp.pulselive.com/photo-resources/2023/11/28/a884e4f7-4805-4b57-b039-5c66e94edf78/10_Luca_Marini_DS_5278.png"
          
         },
         {
            "nome":"Franco Morbidelli",
            "altezza":176,
            "peso":67,
            "squadra":"Prima Pramac Racing",
            "pathImmagine": "https://resources.motogp.pulselive.com/photo-resources/2023/11/28/e887317a-d0d7-4626-a27e-b63059c416e0/21_Franco_Morbidelli_DS_5306.png"
        
         },
         {
            "nome":"Enea Bastianini",
            "altezza":168,
            "peso":64,
            "squadra":"Ducati Lenovo Team",
            "pathImmagine": "https://resources.motogp.pulselive.com/photo-resources/2023/06/15/287d5a3c-1c63-449f-b9be-8e141219cb9e/kComPhrd.png"
         
         },
         {
            "nome":"Fabio Di Giannantonio",
            "altezza":175,
            "peso":68,
            "squadra":"Pertamina Enduro VR46 MotoGP™ Team",
            "pathImmagine": "https://resources.motogp.pulselive.com/photo-resources/2023/11/28/1236aef6-609d-4689-8f6f-642ddd107963/49_Fabio_Di_Giannantonio_DS_5323.png"
         
         },
         {
            "nome":"Marco Bezzecchi",
            "altezza":174,
            "peso":61,
            "squadra":"Pertamina Enduro VR46 MotoGP™ Team",
            "pathImmagine": "https://resources.motogp.pulselive.com/photo-resources/2023/06/15/9e9cc8f6-8ddb-4c4c-a6d8-712851fb3dce/L7mD2P5e.png"
          
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