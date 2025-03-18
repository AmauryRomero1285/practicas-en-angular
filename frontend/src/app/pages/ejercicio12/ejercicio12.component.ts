
import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-ejercicio12',
  imports: [RouterOutlet],
  template: `
      <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
    <router-outlet />
  `,
  styleUrl: './ejercicio12.component.css'
})
export class Ejercicio12Component {

}
