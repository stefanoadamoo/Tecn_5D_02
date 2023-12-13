// francesi.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-francesi',
  templateUrl: './francesi.component.html',
  styleUrls: ['./francesi.component.css'],
})
export class FrancesiComponent implements OnInit {
  piloti = [
    {
      nome: 'Fabio Quartararo',
      altezza: 177,
      peso: 64,
      squadra: 'Monster Energy Yamaha MotoGP',
      img: 'url_immagine_quartararo',
    },
    {
      nome: 'Johann Zarco',
      altezza: 175,
      peso: 68,
      squadra: 'Pramac Racing',
      img: 'url_immagine_zarco',
    },
    // Aggiungi altri piloti se necessario
  ];

  constructor() {}

  ngOnInit(): void {}
}
