import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio01Component } from './ejercicio01/ejercicio01.component';
import { Ejercicio02Component } from "./ejercicio02/ejercicio02.component";
import { Ejercicio03Component } from "./ejercicio03/ejercicio03.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, Ejercicio01Component, Ejercicio02Component, Ejercicio03Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ManualEjercicios_Angular_230190';
}
