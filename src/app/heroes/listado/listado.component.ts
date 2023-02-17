import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {
  heroes: string[] =['Batman','Ant-man','cat woman','Dr destino','thor','loki']
  verHeroeBorrado:string =''
  borrarHeroe():void{
    this.verHeroeBorrado = this.heroes.pop() || '';
   //console.log('Heroe borrado: ',heroeBorrado);
  }
}
