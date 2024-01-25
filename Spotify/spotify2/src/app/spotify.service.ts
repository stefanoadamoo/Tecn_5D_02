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
        'Bearer BQDqMwWA2qQ9uaXvdutXPQYYyEnteT8wSEGrpcLlCszeu74k9zhiFnFg1QN6-JOwV6xCtGjpmuQJcdTaRGN9_HufxfougpRX3O-Bmr_kkhf8iqjLp5WmaKip6pVUNz1sOdfVN9X1w_q1TNAG3jwDON99PzQI0oHb2_L36bhOcetC_2j0QgvGxS8Rh55Y81L0G5I'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}