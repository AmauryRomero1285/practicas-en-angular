import { Routes } from '@angular/router';
import { Ejercicio01Component } from './pages/ejercicio01/ejercicio01.component';
import { Ejercicio02Component } from './pages/ejercicio02/ejercicio02.component';
import { Ejercicio03Component } from './pages/ejercicio03/ejercicio03.component';
import { Ejercicio04Component } from './pages/ejercicio04/ejercicio04.component';
import { Ejercicio05Component } from './pages/ejercicio05/ejercicio05.component';
import { Ejercicio06Component } from './pages/ejercicio06/ejercicio06.component';
import { Ejercicio07Component } from './pages/ejercicio07/ejercicio07.component';
import { Ejercicio08Component } from './pages/ejercicio08/ejercicio08.component';
import { Ejercicio09Component } from './pages/ejercicio09/ejercicio09.component';
import { Ejercicio10Component } from './pages/ejercicio10/ejercicio10.component';
import { Ejercicio11Component } from './pages/ejercicio11/ejercicio11.component';
import { FormsComponent } from './components/login/forms.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';

export const routes: Routes = [
  { path: 'page1', component: Ejercicio01Component },
  { path: 'page2', component: Ejercicio02Component },
  { path: 'page3', component: Ejercicio03Component },
  { path: 'page4', component: Ejercicio04Component },
  { path: 'page5', component: Ejercicio05Component },
  { path: 'page6', component: Ejercicio06Component },
  { path: 'page7', component: Ejercicio07Component },
  { path: 'page8', component: Ejercicio08Component },
  { path: 'page9', component: Ejercicio09Component },
  { path: 'page10', component: Ejercicio10Component },
  { path: 'page11', component: Ejercicio11Component },
  { path: 'login', component: FormsComponent },
  {path:'table',component:DynamicTableComponent},
  { path: '**', redirectTo: 'table' },
];
