import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreencherPaisService {

  url_Pais = 'https://api-paises.pages.dev/paises.json'
  constructor(private http: HttpClient) { }

  getPaises(){
    return this.http.get(`${this.url_Pais}`)
  }
  
}
