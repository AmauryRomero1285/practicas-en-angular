import { Routes } from '@angular/router';
import { Ejercicio01Component } from './pages/ejercicio01/ejercicio01.component';
import { Ejercicio02Component } from './pages/ejercicio02/ejercicio02.component';
import { Ejercicio03Component } from './pages/ejercicio03/ejercicio03.component';
import { Ejercicio04Component } from './pages/ejercicio04/ejercicio04.component';
import { Ejercicio05Component } from './pages/ejercicio05/ejercicio05.component';
import { Ejercicio06Component } from './pages/ejercicio06/ejercicio06.component';

export const routes: Routes = [
      {path: 'page1', component: Ejercicio01Component},
      {path: 'page2', component: Ejercicio02Component},
      {path: 'page3', component: Ejercicio03Component},
      {path: 'page4', component: Ejercicio04Component},
      {path: 'page5', component: Ejercicio05Component},
      {path: 'page6', component: Ejercicio06Component},
      { path: '**', redirectTo: 'page1' }
];
