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
        'Bearer BQDs-cj7bi9CiZH_FlKZUYJLxerFr_LFRwQcPegGXW9yL_FnONpV4X3s3HghOUmdvHKFLeuVbNn_1ItB2DPgCT0f1znSl3pV-DAgGCCAirJhvFeABm9ARVmvdGiyjKV2X0NMYTudbH99kp4F5D0tiASQHIZzISexBGjUxrgtJtVtEkSxByFMOjFcEhb2NQp5GmkGl66ux5trCgQXqzg'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}