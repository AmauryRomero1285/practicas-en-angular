import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forms',
  imports: [],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  @Output()loginEvent=new EventEmitter<boolean>();

  login(){
    this.loginEvent.emit(true);
  }

}
