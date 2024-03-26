import { NgModule } from '@angular/core';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
//PrimeNG Imports
import { TabMenuModule } from 'primeng/tabmenu';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { GalleriaModule } from 'primeng/galleria';
import { StepsModule } from 'primeng/steps';

import { GaleriaHomeComponent } from './galeria-home/galeria-home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
    declarations:[
    MenuBarComponent,
    GaleriaHomeComponent,
    SideBarComponent,
    CarrosselComponent,
    BannerComponent
  ],
    imports:[
        TabMenuModule,
        MegaMenuModule,
        MenubarModule,
        InputTextModule,
        SkeletonModule,
        GalleriaModule,
        StepsModule,
        ButtonModule,
        CardModule
    ],
    exports:[
        MenuBarComponent,
        BannerComponent,
        GaleriaHomeComponent
    ]
})

export class SharedModules{}