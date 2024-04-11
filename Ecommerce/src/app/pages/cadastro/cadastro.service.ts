import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  formData: FormGroup; // Um único FormGroup para todos os dados

  private paymentComplete = new Subject<any>();
  paymentComplete$ = this.paymentComplete.asObservable();

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    // Criando um único FormGroup para todos os dados
    this.formData = this.formBuilder.group({
      cliente: this.formBuilder.group({
        primeiroNome: ['', Validators.required],
        sobrenome: ['', Validators.required],
        genero: ['', Validators.required],
        email: ['', Validators.required],
        cpf: ['', Validators.required], 
        dtNascimento: ['', Validators.required],
        tipoTelefone: ['', Validators.required],
        telefone: ['', Validators.required],
        senha: ['', Validators.required]
      }),
      endereco: this.formBuilder.group({
        tipoResidencia: ['', Validators.required],
        cep: ['', Validators.required],
        logradouro: ['', Validators.required],
        bairro: ['', Validators.required],
        numeroResidencia: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required],
        pais: ['', Validators.required],
      })
    });
  }

  getFormData() {
    return this.formData;
  }

  setClienteData(data: any) {
    this.formData.get('cliente')?.patchValue(data);
  }

  setEnderecoData(data: any) {
    this.formData.get('endereco')?.patchValue(data);
  }

  complete() {
    console.log(this.formData)
    if (this.formData.valid) {
      this.paymentComplete.next(this.formData.value);
    } else {
      console.error('O formulário não está completo ou contém erros.');
    }
  }
  post() {
    if (!this.formData) {
      console.error('O formulário do cliente não foi definido.');
      return;
    }

    const url = 'https://localhost:44352/api/Cliente/Inserir';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const clienteData = this.formData.value;

    const requestBody = {
      nome: `${clienteData.primeiroNome} ${clienteData.sobrenome}`,
      email: clienteData.email,
      numeroTelefone: clienteData.numeroTelefone,
      cpf: clienteData.cpf,
      dtNascimento: clienteData.dtNascimento, 
      tipoTelefone: clienteData.tipoTelefone, 
      telefone: clienteData.telefone, 
      senha: clienteData.senha,
      endereco: {
        cep: clienteData.cep,
        logradouro: clienteData.logradouro,
        bairro: clienteData.bairro,
        numero: clienteData.numero,
        cidade: clienteData.cidade,
        estado: clienteData.estado,
        sigla: clienteData.sigla
      }
    };
    
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
