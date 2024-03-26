import { InformacoesPessoaisComponent } from './../informacoes-pessoais/informacoes-pessoais.component';
import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss'],
  providers: [MessageService]
})
export class FormCadastroComponent implements OnInit {
  items!: MenuItem[];
  subscription!: Subscription;

  constructor(public messageService: MessageService, public cadastroService: CadastroService) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Informacoes',
        routerLink: 'informacoes'
      },
      {
        label: 'Endereço',
        routerLink: 'endereco'
      },
      {
        label: 'Confirmaçao',
        routerLink: 'confirmacao'
      }
    ];

    this.subscription = this.cadastroService.paymentComplete$.subscribe((personalInformation) => {
      this.cadastroService.post();
      this.messageService.add({ severity: 'success', summary: 'Cadastro Concluido', detail: personalInformation.primeiroNome + ' ' + personalInformation.sobrenome });
    });
  }


}
