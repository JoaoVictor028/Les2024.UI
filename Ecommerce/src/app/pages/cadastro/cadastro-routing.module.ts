import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { InformacoesPessoaisComponent } from './informacoes-pessoais/informacoes-pessoais.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';

const routes: Routes = [
  { path: 'informacoes', component: InformacoesPessoaisComponent },
  { path: 'endereco', component: EnderecoComponent },
  { path: 'confirmacao', component: ConfirmacaoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
