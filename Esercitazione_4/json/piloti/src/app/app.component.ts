import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Italiani } from './models/model';
import { Spagnoli } from './models/model';
import { Francesi } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  italiani: Italiani[];
  spagnoli: Spagnoli[];
  francesi: Francesi[];
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
  // Make the HTTP request:
  this.http.get('https://3000-stefanoadamoo-tecn5d02-s7luv29r0am.ws-eu107.gitpod.io/api').subscribe(data => {
  // Read the result field from the JSON response.
  this.italiani = data["Italiani"];
  this.spagnoli = data["Spagnoli"];
  this.francesi=data["Francesi"];
  });
  }
  }