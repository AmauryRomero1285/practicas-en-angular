import { Component, Output,EventEmitter } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-forms',
  imports: [],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  standalone: true,
})
export class FormsComponent {
  user:string='';
  password:string='';
}

