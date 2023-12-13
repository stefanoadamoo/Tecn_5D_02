import { Component } from '@angular/core';

@Component({
  selector: 'app-spagnoli',
  templateUrl: './spagnoli.component.html',
  styleUrls: ['./spagnoli.component.css']
})
export class SpagnoliComponent {
  
    piloti = [
      { nome: 'Valentino Rossi', altezza: 182, peso: 67, squadra: 'Yamaha', image: 'assets/rossi.jpg' },
      { nome: 'Valentino Rossi', altezza: 182, peso: 67, squadra: 'Yamaha', image: 'assets/.jpg' },
      
    ];
}
