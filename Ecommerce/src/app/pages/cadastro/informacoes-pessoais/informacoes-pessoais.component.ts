import { Component, OnInit, ViewChild } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-informacoes-pessoais',
  templateUrl: './informacoes-pessoais.component.html',
  styleUrls: ['./informacoes-pessoais.component.scss']
})
export class InformacoesPessoaisComponent implements OnInit {
  @ViewChild('informacaoPessoal') informacaoPessoalForm!: NgForm;
  submitted: boolean = false;

  constructor(public cadastroService: CadastroService, private router: Router) { }

  generos: any[] = [
    { genero: 'Masculino' },
    { genero: 'Feminino' },
    { genero: 'Não informar' },
  ];

  tiposTelefone: any[] = [
    { tipo: 'Celular' },
    { tipo: 'Residencial' },
  ];

  ngOnInit(): void {
  }

  nextPage() {
    if (this.informacaoPessoalForm.valid) {
      const clienteData = this.informacaoPessoalForm.value;
      console.log(clienteData)
      this.cadastroService.setClienteData(clienteData); // Envie os dados para o serviço
      this.router.navigate(['/cadastro/endereco']);
    }
    this.submitted = true;
  }
}
