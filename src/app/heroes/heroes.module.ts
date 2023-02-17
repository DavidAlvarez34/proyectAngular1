import { NgModel } from '@angular/forms';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Manejar modulos para exportar funciones
@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //visibilidad publica
    exports:[
        ListadoComponent
    ],
    //Modulos
    imports:[
        //Ofrece directivas como ngFor y ngIf
        CommonModule
    ]
})
export class HeroesModule{}
