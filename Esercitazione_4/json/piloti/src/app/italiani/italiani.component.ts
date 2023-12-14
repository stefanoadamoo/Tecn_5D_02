import { Component } from '@angular/core';
import { Italiani } from '../models/model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-italiani',
  templateUrl: './italiani.component.html',
  styleUrls: ['./italiani.component.css']
})
export class ItalianiComponent {
  italiani:Italiani[];
  constructor(private router:Router){
    this.italiani = this.router.getCurrentNavigation().extras.state as Italiani[];
  }

}
