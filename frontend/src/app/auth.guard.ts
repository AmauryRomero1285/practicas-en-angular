import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.getLoginState()) {
      return true;  // Permite el acceso a la ruta
    } else {
      // Si el usuario no está autenticado, redirige al login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
