import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-ejercicio04',
  imports: [CommonModule],
  templateUrl: './ejercicio04.component.html',
  styleUrl: './ejercicio04.component.css',
})
export class Ejercicio04Component {
  isLoggedIn = true;
  isServerRunning = true;
}
