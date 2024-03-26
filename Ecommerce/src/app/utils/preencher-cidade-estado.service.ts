import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreencherCidadeEstadoService {

  url_UF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
  url_cidades = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'
  constructor(private http: HttpClient) { }

  getEstados(): Observable<any[]> {
    return this.http.get<any[]>(this.url_UF);
  }

  getCidades(uf: string): Observable<any[]>{
    return this.http.get<any[]>(`${this.url_cidades}${uf}/municipios`)
  }
  
}
