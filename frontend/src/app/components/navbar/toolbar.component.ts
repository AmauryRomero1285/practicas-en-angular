import { Component, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  isSidebarVisible = true;
  isLoggedIn = true;
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
  //
  get displayedItems() {
    return this.dropdownItems.slice(0, 15); // Mostrar solo los primeros 5 elementos
  }
  //
  dropdownItems = [
    {
      name: 'Ejercicio 1',
      route: '/page1',
    },
    {
      name: 'Ejercicio 2',
      route: '/page2',
    },
    {
      name: 'Ejercicio 3',
      route: '/page3',
    },
    {
      name: 'Ejercicio 4',
      route: '/page4',
    },
    {
      name: 'Ejercicio 5',
      route: '/page5',
    },
    {
      name: 'Ejercicio 6',
      route: '/page6',
    },
    {
      name: 'Ejercicio 7',
      route: '/page7',
    },
    {
      name: 'Ejercicio 8',
      route: '/page8',
    },
    {
      name: 'Ejercicio 9',
      route: '/page9',
    },
    {
      name: 'Ejercicio 10',
      route: '/page10',
    },
    {
      name: 'Ejercicio 11',
      route: '/page11',
    },
    {
      name: 'Ejercicio 12',
      route: '/page12',
    },
    {
      name: 'Tabla',
      route: '/table',
    },
    {
      name: 'Graficas',
      route: '/graphics',
    },
  ];
}
