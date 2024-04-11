import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StepsModule } from 'primeng/steps';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModules } from './shared/shared.module';
import { InformacoesPessoaisComponent } from './pages/cadastro/informacoes-pessoais/informacoes-pessoais.component';
import { EnderecoComponent } from './pages/cadastro/endereco/endereco.component';
import { ConfirmacaoComponent } from './pages/cadastro/confirmacao/confirmacao.component';
import { FormCadastroComponent } from './pages/cadastro/form-cadastro/form-cadastro.component';
import { CartaoComponent } from './pages/cadastro/cartao/cartao.component';
import { GerenciarClientesComponent } from './pages/gerenciar-clientes/gerenciar-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformacoesPessoaisComponent,
    EnderecoComponent,
    ConfirmacaoComponent,
    FormCadastroComponent,
    CartaoComponent,
    GerenciarClientesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModules,
    StepsModule,
    ButtonModule,
    CardModule,
    ToastModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
