import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-helper09',
  imports: [],
  template: `<button class="btn" (click)="addItem()">Agregar</button>`,
  styles: `
  button{
    background-color:#f13341;
    color:#fff;
    padding:10px;
    border-radius:5px;
    margin:10px;
  }`,
})
export class Helper09Component {
  @Output() addItemEvent = new EventEmitter<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
