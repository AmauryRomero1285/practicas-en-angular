import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio07',
  imports: [],
  template:`<section (mouseover)="onMouseOver()">
  Hola, 
  {{ message }}
</section>
`,
  styles:`
  section{
    font-size: 1.5rem;
    color: #333;
    padding: 10px;
    border: 1px ;
    border-radius: 5px;
    cursor: pointer;
  }` ,
})
export class Ejercicio07Component {
  message = '';

  onMouseOver() {
    this.message = 'invite las cocas :)';
  }
}
