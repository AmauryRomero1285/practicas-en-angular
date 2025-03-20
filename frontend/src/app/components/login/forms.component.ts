import { Component} from '@angular/core';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-forms',
  imports: [],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  standalone: true,
})
export class FormsComponent {
  username:string='';
  password:string='';

  constructor(private authService: AuthService) {}

  onLogin(): void {
    // Aquí puedes agregar la validación del formulario
    if (this.username && this.password) {
      this.authService.login();
    }
  }
}

