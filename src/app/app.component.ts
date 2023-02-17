import { Component } from '@angular/core';

@Component({
  //nombre de las etiquetas de los componentes
  selector: 'app-root',//aplicacion principal
  //templateUrl: archivo de html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string = 'Contador app';
  numero:number = 0;
  base:number = 5;

  acumular (valor:number){
    this.numero +=valor; 
  }
  
}
