import { NgModule } from '@angular/core';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
//PrimeNG Imports
import { TabMenuModule } from 'primeng/tabmenu';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    declarations:[
    MenuBarComponent
  ],
    imports:[
        TabMenuModule,
        MegaMenuModule,
        MenubarModule,
        InputTextModule,
    ],
    exports:[
        MenuBarComponent
    ]
})

export class SharedModules{}