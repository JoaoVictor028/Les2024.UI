import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from '../cadastro.service';
import { ConsultaCepService } from 'src/app/utils/consulta-cep.service';
import { NgForm } from '@angular/forms';
import { PreencherPaisService } from 'src/app/utils/preencher-pais.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {
  @ViewChild('enderecoForm') enderecoForm!: NgForm;
  submitted: boolean = false;

  tiposResidencia: any[] = [
    {tipo: 'casa'},
    {tipo: 'apartamente'}
  ]
  estados: any[] = [
    { uf: 'AC', nome: 'Acre' },
    { uf: 'AL', nome: 'Alagoas' },
    { uf: 'AM', nome: 'Amazonas' },
    { uf: 'AP', nome: 'Amapá' },
    { uf: 'BA', nome: 'Bahia' },
    { uf: 'CE', nome: 'Ceará' },
    { uf: 'DF', nome: 'Distrito Federal' },
    { uf: 'ES', nome: 'Espírito Santo' },
    { uf: 'GO', nome: 'Goiás' },
    { uf: 'MA', nome: 'Maranhão' },
    { uf: 'MG', nome: 'Minas Gerais' },
    { uf: 'MS', nome: 'Mato Grosso do Sul' },
    { uf: 'MT', nome: 'Mato Grosso' },
    { uf: 'PA', nome: 'Pará' },
    { uf: 'PB', nome: 'Paraíba' },
    { uf: 'PE', nome: 'Pernambuco' },
    { uf: 'PI', nome: 'Piauí' },
    { uf: 'PR', nome: 'Paraná' },
    { uf: 'RJ', nome: 'Rio de Janeiro' },
    { uf: 'RN', nome: 'Rio Grande do Norte' },
    { uf: 'RO', nome: 'Rondônia' },
    { uf: 'RR', nome: 'Roraima' },
    { uf: 'RS', nome: 'Rio Grande do Sul' },
    { uf: 'SC', nome: 'Santa Catarina' },
    { uf: 'SE', nome: 'Sergipe' },
    { uf: 'SP', nome: 'São Paulo' },
    { uf: 'TO', nome: 'Tocantins' }
  ];

  paises!: any []

  constructor(
    public cadastroService: CadastroService,
    private router: Router,
    private consultaCepService: ConsultaCepService,
    private preencherPaisService: PreencherPaisService
  ) {}

  ngOnInit() { 
    this.getPaises();
  }

  getPaises(){
    this.preencherPaisService.getPaises().subscribe(resultado => {
      this.paises = Object.values(resultado)
    })
  }

  consultaCEP(ev: any) {
    const cep = ev.target.value;
    if (cep !== '') {
      this.consultaCepService.getConsultaCep(cep).subscribe(resultado => {
      this.preencherEndereco(resultado)});
    }
    return
  }

  preencherEndereco(dados : any){
    this.enderecoForm.form.patchValue({
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    });
  }

  getNomeEstado(sigla: string): string | undefined {
    const estadoEncontrado = this.estados.find(estado => estado.uf === sigla);
    return estadoEncontrado ? estadoEncontrado.nome : undefined;
  }
  
  nextPage() {
    if (this.enderecoForm.valid) {
      const enderecoData = this.enderecoForm.value;
      const siglaEstado = enderecoData.estado;
      const nomeEstado = this.getNomeEstado(siglaEstado); 
      if (nomeEstado) {
        enderecoData.estado = { uf: siglaEstado, nome: nomeEstado }; // Atribui tanto a sigla quanto o nome do estado ao campo 'estado'
      }
      console.log(enderecoData)
      this.cadastroService.setEnderecoData(enderecoData); // Envie os dados para o serviço
      this.router.navigate(['cadastro/confirmacao']);
    }
    this.submitted = true;
  }

  prevPage() {
    this.router.navigate(['/cadastro/informacoes']);
  }
}
