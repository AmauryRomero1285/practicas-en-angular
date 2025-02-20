import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Ejercicio01Component } from './ejercicio01/ejercicio01.component';
import { Ejercicio02Component } from './ejercicio02/ejercicio02.component';
import { Ejercicio03Component } from './ejercicio03/ejercicio03.component';
import { Ejercicio04Component } from './ejercicio04/ejercicio04.component';
import { Ejercicio05Component } from './ejercicio05/ejercicio05.component';
import { Ejercicio06Component } from './ejercicio06/ejercicio06.component';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './commponents/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Ejercicio01Component,
    Ejercicio02Component,
    Ejercicio03Component,
    Ejercicio04Component,
    Ejercicio05Component,
    Ejercicio06Component,
    MatButtonModule,
    ToolbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ManualEjercicios_Angular_230190';
}
