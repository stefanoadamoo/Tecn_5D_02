import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
results: string[];
// Inject HttpClient into your component or service.
constructor(private http: HttpClient) {}
ngOnInit(): void {
// Make the HTTP request:
this.http.get('https://3000-stefanoadamoo-tecn5d02-9astw366m2h.ws-eu106.gitpod.io/api').subscribe(data => {
  // Read the result field from the JSON response.
this.results = data['results'];
});
}
}