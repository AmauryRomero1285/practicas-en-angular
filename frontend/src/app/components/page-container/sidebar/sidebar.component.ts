import { Component } from '@angular/core';
import { RouterModule,Router,NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  searchTerm: string = '';
  currentRoute: string = '';

  //
  constructor(private router: Router) {
    // Escucha los eventos del router para detectar cambios en la ruta
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url; // Obtiene la ruta actual
      }
    });
  }
  sidebarItems = [
    {
      name: 'Ejercicio 1',
      route: '/page1',
      isOpen: false,
      menu: {
        name: 'Ejercicio 1',
        Open: false,
        submenu: { name: 'Descripción del proyecto  ' },
      },
    },
    {
      name: 'Ejercicio 2',
      route: '/page2',
      isOpen: false,
      menu: {
        name: 'Ejercicio 2',
        Open: false,
        submenu: { name: 'Descripción del proyecto  ' },
      },
    },
    {
      name: 'Ejercicio 3',
      route: '/page3',
      isOpen: false,
      menu: {
        name: 'Ejercicio 3',
        Open: false,
        submenu: { name: 'Descripción del proyecto  ' },
      },
    },
    {
      name: 'Ejercicio 4',
      route: '/page4',
      isOpen: false,
      menu: {
        name: 'Ejercicio 4',
        Open: false,
        submenu: { name: 'Descripción del proyecto  ' },
      },
    },
    {
      name: 'Ejercicio 5',
      route: '/page5',
      isOpen: false,
      menu: {
        name: 'Ejercicio 5 ',
        Open: false,
        submenu: { name: 'Descripción del proyecto  ' },
      },
    },
    {
      name: 'Ejercicio 6',
      route: '/page6',
      isOpen: false,
      menu: {
        name: 'Ejercicio 6',
        Open: false,
        submenu: { name: 'Descripción del proyecto  ' },
      },
    },
    {
      name: 'Ejercicio 7',
      route: '/page7',
      isOpen: false,
      menu: {
        name: 'Ejercicio 7',
        Open: false,
        submenu: { name: 'Descripción del proyecto  ' },
      },
    },
    {
      name: 'Ejercicio 8',
      route: '/page8',
      isOpen: false,
      menu: {
        name: 'Ejercicio 8',
        Open: false,
        submenu: { name: 'Descripción del proyecto  ' },
      },
    },
    {
      name: 'Ejercicio 9',
      route: '/page9',
      isOpen: false,
      menu: {
        name: 'Ejercicio 9',
        Open: false,
        submenu: { name: 'Descripción del proyecto  ' },
      },
    },
    {
      name: 'Ejercicio 10',
      route: '/page10',
      isOpen: false,
      menu: {
        name: 'Ejercicio 10',
        Open: false,
        submenu: { name: 'Descripción del proyecto  ' },
      },
    },
    {
      name: 'Ejercicio 11',
      route: '/page11',
      isOpen: false,
      menu: {
        name: 'Ejercicio 11',
        Open: false,
        submenu: { name: 'Descripción del proyecto  ' },
      },
    },
    {
      name: 'Ejercicio 12',
      route: '/page12',
      isOpen: false,
      menu: {
        name: 'Ejercicio 12',
        Open: false,
        submenu: { name: 'El sidebar es un ejemplo del RouterOulet' },
      },
    },
    {
      name: 'Tabla',
      route: '/table',
      isOpen: false,
      menu: {
        name: 'Tabla dinamica',
        Open: false,
        submenu: { name: 'El sidebar es un ejemplo del RouterOulet' },
      },
    },
  ];

  //
    get displayedItems() {
    return this.sidebarItems.filter((item) => item.route === this.currentRoute);
  }

  // Filtrar los elementos según la búsqueda
  get filteredItems() {
    return this.sidebarItems.filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Función para abrir/cerrar el primer nivel de submenú
  toggleDropdown(index: number) {
    this.sidebarItems[index].isOpen = !this.sidebarItems[index].isOpen;
  }

  // Función para abrir/cerrar el submenú
  toggleSubmenu(index: number) {
    this.sidebarItems[index].menu.Open = !this.sidebarItems[index].menu.Open;
    if (!this.sidebarItems[index].menu.Open) {
      console.log('submenu desplegado');
    }
  }
}
