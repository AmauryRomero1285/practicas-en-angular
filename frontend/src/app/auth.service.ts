import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSource = new BehaviorSubject<boolean>(false); // Estado inicial
  isLoggedIn$ = this.isLoggedInSource.asObservable();

  constructor() {}

  // Método para cambiar el estado de autenticación (login/logout)
  setLoginState(isLoggedIn: boolean): void {
    this.isLoggedInSource.next(isLoggedIn);
  }

  // Método para obtener el estado actual de autenticación
  getLoginState(): boolean {
    return this.isLoggedInSource.value;
  }

  // Método para realizar el login (simple simulación)
  login(): void {
    this.setLoginState(true);  
  }

  // Método para realizar el logout
  logout(): void {
    this.setLoginState(false); 
  }
}

