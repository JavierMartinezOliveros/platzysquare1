import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatzySquare';
  listo = false;
  nombre = ''; //javascript
  apellido: string= ''; //TypeScript
  clickeado = 0;

  constructor(){
  	setTimeout(() => {
  		this.listo = true;
  	}, 3000)
  }
  sumarAlgo(){
  	this.clickeado += 1;
  }
}
