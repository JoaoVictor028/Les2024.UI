import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss'],
  providers: [MessageService]
})
export class FormCadastroComponent implements OnInit{
  items!: MenuItem[];

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
  }
}
