import { Router } from '@angular/router';
import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.scss']
})
export class ConfirmacaoComponent implements OnInit {

  clienteInformation: any

  constructor(public cadastroService: CadastroService, private router: Router) { }

  ngOnInit() {
    this.clienteInformation = this.cadastroService.clienteInformation;
  }

  complete() {
    this.cadastroService.complete();
  }

  prevPage() {
    this.router.navigate(['formulario/endereco']);
  }
}
