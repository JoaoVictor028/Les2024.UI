import { Injectable } from '@angular/core';

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
      cidade: null,
      estado: null,
      sigla: null
    },
    paymentInformation: {
      cardholderName: '',
      cardholderNumber: '',
      date: '',
      cvv: '',
      remember: false
    }
  };

  getClienteInformation() {
    return this.clienteInformation;
}

}
