import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio05',
  imports: [CommonModule],
  templateUrl: './ejercicio05.component.html',
  styleUrl: './ejercicio05.component.css'
})
export class Ejercicio05Component {
  operatingSystems = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'linux', name: 'Linux' }
  ];
  users = [
    { id: 0, name: 'Amaury' },
    { id: 1, name: 'Josúe' },
    { id: 2, name: 'Abdallah' },
    { id: 3, name: 'Jonathan' },
    { id: 4, name: 'Brian' }
  ];
  showList = true; 
}
