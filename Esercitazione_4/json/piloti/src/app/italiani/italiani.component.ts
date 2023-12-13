import { Component } from '@angular/core';

@Component({
  selector: 'app-italiani',
  templateUrl: './italiani.component.html',
  styleUrls: ['./italiani.component.css']
})
export class ItalianiComponent {
  piloti = [
    { nome: 'Valentino Rossi', altezza: 182, peso: 67, squadra: 'Yamaha', image: 'assets/rossi.jpg' },
    // Altri piloti italiani...
  ];
}
