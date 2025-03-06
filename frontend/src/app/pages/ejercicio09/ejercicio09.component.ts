import { Component } from '@angular/core';
import { Helper09Component } from './helper09/helper09.component';

@Component({
  selector: 'app-ejercicio09',
  imports: [Helper09Component],
  template: `
    <div class="container">
      <div class="button">
        <app-helper09 (addItemEvent)="addItem($event)" />
      </div>
      <div class="count">
        <p><strong>contador: </strong>{{ items.length }}</p>
      </div>
    </div>
  `,
  styles: `
  
  .container{
    background-color:#f3ff2013;
    border-radius:5px;
    margin:5px 25vw;
    padding:10px;
    display:flex;
    flex-direction:row;
    align-items:center;
    width:20vw;
  }
  p{
    margin-left:20px;
    text-align:center;
  }
  `,
})
export class Ejercicio09Component {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
