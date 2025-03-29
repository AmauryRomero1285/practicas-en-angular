import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-ejercicio11',
  imports: [NgOptimizedImage],
  template: `
  <p>Username: {{ username }}</p>
  <p>Preferred Framework:</p>
  <ul>
    <li>
      Static Image:
      <img ngSrc="/app/assets/user.png" alt="image" width="64" height="32"/>
    </li>
    <li>
      Dynamic Image:
      <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32"/>
    </li>
  </ul>
`,
  styleUrl: './ejercicio11.component.css'
})
export class Ejercicio11Component {
  logoUrl = '/app/assets/user.png';
  logoAlt = 'img';
  username = 'Deray369';
}
