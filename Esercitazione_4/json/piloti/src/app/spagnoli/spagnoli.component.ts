import { Component } from '@angular/core';
import { Spagnoli } from '../models/model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-spagnoli',
  templateUrl: './spagnoli.component.html',
  styleUrls: ['./spagnoli.component.css']
})
export class SpagnoliComponent {
  spagnoli:Spagnoli[];
  constructor(private router:Router){
    this.spagnoli = this.router.getCurrentNavigation().extras.state as Spagnoli[];
  }
}
