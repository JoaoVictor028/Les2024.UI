import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from './../cadastro.service';
import { ConsultaCepService } from 'src/app/utils/consulta-cep.service';
import { PreencherCidadeEstadoService } from 'src/app/utils/preencher-cidade-estado.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

  enderecoInformation: any = {};
  submitted: boolean = false;
  estados: any[] = [];
  cidades: any[] = [];


  constructor(
    public cadastroService: CadastroService,
    private router: Router,
    public consultaCepService: ConsultaCepService,
    public preencherCidadeEstadoService: PreencherCidadeEstadoService
  ) {}

  ngOnInit() {
    this.enderecoInformation = this.cadastroService.getClienteInformation().enderecoInformation;
    this.carregarEstados();
  }

  buscarCep() {
    if (this.enderecoInformation.cep && this.enderecoInformation.cep.length === 8) {
      this.consultaCepService.getConsultaCep(this.enderecoInformation.cep)
        .subscribe((data: any) => {
          this.enderecoInformation.logradouro = data.logradouro;
          this.enderecoInformation.bairro = data.bairro;
          this.enderecoInformation.cidade = data.localidade;
          this.enderecoInformation.estado = data.uf;
        }, (error) => {
          console.error('Erro ao consultar CEP:', error);
        });
    }
  }

  setCidade(event: any) {
    if (event.value) {
      this.enderecoInformation.cidade = event.value.nome;
    }
  }

  nextPage() {
    if (this.validarCamposEndereco()) {
      this.cadastroService.clienteInformation.enderecoInformation = this.enderecoInformation;
      this.router.navigate(['formulario/confirmacao']);
    }
    this.submitted = true

  }

  prevPage() {
    this.router.navigate(['/formulario/informacoes']);
  }

  carregarEstados() {
    this.preencherCidadeEstadoService.getEstados()
      .subscribe((data: any[]) => {
        this.estados = data;
      }, (error) => {
        console.error('Erro ao buscar estados:', error);
      });
  }

  validarCamposEndereco(): boolean {
    return !!(
      this.enderecoInformation.cep &&
      this.enderecoInformation.logradouro &&
      this.enderecoInformation.bairro &&
      this.enderecoInformation.cidade &&
      this.enderecoInformation.estado &&
      this.enderecoInformation.numero
    );
  }

  onEstadoChange(event: any) {
    if (event.value) {
      this.carregarCidadesPorEstado(event.value.sigla);
      this.enderecoInformation.estado = event.value.nome;
      this.enderecoInformation.sigla = event.value.sigla
    }
  }

  carregarCidadesPorEstado(estadoSigla: string) {
    this.preencherCidadeEstadoService.getCidades(estadoSigla)
      .subscribe((data: any[]) => {
        this.cidades = data;
      }, (error) => {
        console.error('Erro ao buscar cidades:', error);
      });
  }

  onCidadeChange(event: any) {
    this.setCidade(event);
    console.log('Cidade selecionada:', event.value);
}
}
