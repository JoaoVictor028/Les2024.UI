import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  clienteInformation = {
    personalInformation: {
      primeiroNome: '',
      sobrenome: '',
      email: '',
      numeroTelefone: '',
    },
    enderecoInformation: {
      cep: '',
      logradouro: '',
      bairro: '',
      numero: null,
      cidade: null,
      estado: null,
      sigla: null
    },
  };

  private paymentComplete = new Subject<any>();
  paymentComplete$ = this.paymentComplete.asObservable();

  getClienteInformation() {
    return this.clienteInformation;
  }

  complete() {
    this.paymentComplete.next(this.clienteInformation.personalInformation);
  }

  constructor(public http: HttpClient){ }

  post() {
    const url = 'https://localhost:44352/api/Cliente/Inserir';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Montando o objeto conforme o JSON fornecido
    const requestBody = {
      nome: this.clienteInformation.personalInformation.primeiroNome + ' ' + this.clienteInformation.personalInformation.sobrenome,
      email: this.clienteInformation.personalInformation.email,
      numeroTelefone: this.clienteInformation.personalInformation.numeroTelefone,
      endereco: {
        numero: '', // Você precisa preencher este campo
        logradouro: this.clienteInformation.enderecoInformation.logradouro,
        cep: this.clienteInformation.enderecoInformation.cep,
        bairro: this.clienteInformation.enderecoInformation.bairro,
        cidade: {
          nome: this.clienteInformation.enderecoInformation.cidade,
          estado: {
            nome: this.clienteInformation.enderecoInformation.estado,
            sigla: this.clienteInformation.enderecoInformation.sigla
          }
        }
      }
    };

    // Enviando a solicitação POST
    this.http.post(url, requestBody, { headers }).subscribe(
      (response: any) => {
        console.log('Sucesso:', response);
      },
      (error) => {
        console.error('Erro:', error);
      }
    );
  }

}
