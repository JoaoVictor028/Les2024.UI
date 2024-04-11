import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  url_API_CEP = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) { }

  getConsultaCep(cep: string){
    return this.http.get(`${this.url_API_CEP}${cep}/json`)
  }
}
