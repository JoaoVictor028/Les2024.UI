import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-informacoes-pessoais',
  templateUrl: './informacoes-pessoais.component.html',
  styleUrls: ['./informacoes-pessoais.component.scss']
})
export class InformacoesPessoaisComponent implements OnInit {
  personalInformation: any;
  submitted: boolean = false;

  constructor(public cadastroService: CadastroService, private router: Router) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.personalInformation = this.cadastroService.getClienteInformation().personalInformation;
  }

  nextPage() {
    if (this.personalInformation.primeiroNome &&
      this.personalInformation.sobrenome &&
      this.personalInformation.email &&
      this.personalInformation.numeroTelefone) {
      this.cadastroService.clienteInformation.personalInformation = this.personalInformation;
      this.router.navigate(['/formulario/endereco']);

      return;
    }

    this.submitted = true;
  }

}
