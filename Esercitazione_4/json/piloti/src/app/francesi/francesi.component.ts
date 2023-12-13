import { Component } from '@angular/core';

@Component({
  selector: 'app-francesi',
  templateUrl: './francesi.component.html',
  styleUrls: ['./francesi.component.css']
})
export class FrancesiComponent {
    piloti = [
      { nome: 'Valentino Rossi', altezza: 182, peso: 67, squadra: 'Yamaha', image: 'assets/rossi.jpg' },
      // Altri piloti italiani...
    ];
}
