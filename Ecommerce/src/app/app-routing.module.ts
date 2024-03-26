import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormCadastroComponent } from './pages/cadastro/form-cadastro/form-cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'formulario',
    component: FormCadastroComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/cadastro/cadastro-routing.module').then(m => m.CadastroRoutingModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
