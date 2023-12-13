// italiani.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-italiani',
  templateUrl: './italiani.component.html',
  styleUrls: ['./italiani.component.css'],
})
export class ItalianiComponent implements OnInit {
  piloti = [
    {
      nome: 'Valentino Rossi',
      altezza: 182,
      peso: 67,
      squadra: 'Yamaha Factory Racing',
      img: 'https://www.gt-world-challenge-europe.com/timthumb.php?w=700&src=%2Fimages%2Fdrivers%2Fphoto_3126.png',
    },
    
  ];

  constructor() {}

  ngOnInit(): void {}
}
