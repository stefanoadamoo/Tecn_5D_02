import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCgWJPxPfEgaukYyoUEXE6LsPsSE1Oy0BItrcSOsAg2Ykk89pba2DD58kPI-KnHkmH9565Rl2jbi8K8wT48x7yDKvI-T0qvwwtycAQraCq4sbdNnrS2lW5zd3xAjpcEX3aGfmUhRnPhK-lCDt5n4Okv1cETOcjBpvQZ8U2ob9O-FpYbr8Ec9YPbvKD3o3UPJzA'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}