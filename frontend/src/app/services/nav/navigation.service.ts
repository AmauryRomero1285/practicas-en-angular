// navigation.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private currentRouteSubject = new BehaviorSubject<string>('');
  currentRoute$ = this.currentRouteSubject.asObservable();

  constructor(private router: Router) {}

  // Actualiza la ruta activa
  setCurrentRoute(route: string) {
    this.currentRouteSubject.next(route);
  }

  // Llama al setCurrentRoute para actualizar la ruta activa en el servicio
  navigateTo(route: string) {
    this.router.navigate([route]);
    this.setCurrentRoute(route);
  }
}
