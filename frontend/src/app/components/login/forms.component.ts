import { Component} from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-forms',
  imports: [FormsModule,FooterComponent,RouterModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  standalone: true,
})
export class FormsComponent {
  username:string='';
  password:string='';
  isSidebarVisible = false;
  constructor(private authService: AuthService) {}

  onLogin(): void {
    // Aquí puedes agregar la validación del formulario
    if (this.username && this.password) {
      this.authService.login();
      console.log('User logged: '+this.username+' password:'+this.password);
    }
  }
}

