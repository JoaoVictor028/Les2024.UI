import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from './../cadastro.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.scss']
})
export class ConfirmacaoComponent implements OnInit {

  clienteForm!: FormGroup;

  constructor(public cadastroService: CadastroService, private router: Router) { }

  ngOnInit() {
    this.clienteForm = this.cadastroService.getFormData();
  }

  complete() {
    this.cadastroService.complete();
  }

  prevPage() {
    this.router.navigate(['cadastro/endereco']);
  }
}
