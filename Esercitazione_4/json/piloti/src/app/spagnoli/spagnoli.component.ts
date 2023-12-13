// spagnoli.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spagnoli',
  templateUrl: './spagnoli.component.html',
  styleUrls: ['./spagnoli.component.css'],
})
export class SpagnoliComponent implements OnInit {
  piloti = [
    {
      nome: 'Marc Marquez',
      altezza: 173,
      peso: 65,
      squadra: 'Repsol Honda Team',
      img: 'url_immagine_marquez',
    },
    {
      nome: 'Maverick Vinales',
      altezza: 171,
      peso: 68,
      squadra: 'Monster Energy Yamaha MotoGP',
      img: 'url_immagine_vinales',
    },
    // Aggiungi altri piloti se necessario
  ];

  constructor() {}

  ngOnInit(): void {}
}
