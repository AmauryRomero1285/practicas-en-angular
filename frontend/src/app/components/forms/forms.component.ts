import { Component, Output,EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
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
  constructor(private authService:AuthService) { }
  login(){
    this.authService.login(this.user,this.password).subscribe({
      next:(response)=>
        console.log('logueo exitoso',response),
        error:(error)=>
          console.error('error',error)
        });
      }
    }

