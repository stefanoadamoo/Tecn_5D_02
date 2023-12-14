import { Component } from '@angular/core';
import { Francesi } from '../models/model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-francesi',
  templateUrl: './francesi.component.html',
  styleUrls: ['./francesi.component.css']
})
export class FrancesiComponent {
  francesi:Francesi[];
  constructor(private router:Router){
    this.francesi = this.router.getCurrentNavigation().extras.state as Francesi[];
  }
}
