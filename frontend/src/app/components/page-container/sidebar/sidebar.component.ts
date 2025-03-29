import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
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
  currentRoute: string = '';

  //
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url;
  
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
  
        // Asegurar que el item correspondiente esté abierto
        this.sidebarItems.forEach((item) => {
          item.isOpen = item.route === this.currentRoute;
          item.menu.Open = item.isOpen;
        });
      }
    });
  }
  
  //
  searchTerm: string = '';
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
      name: 'Tabla Dinámica',
      route: '/simple-table',
      isOpen: false,
      menu: {
        name: 'Tabla dinamica',
        Open: false,
        submenu: { name: 'El sidebar es un ejemplo del RouterOulet' },
      },
    },
    {
      name: 'Tabla de Datos',
      route: '/dataTable-table',
      isOpen: false,
      menu: {
        name: 'Tabla dinamica',
        Open: false,
        submenu: { name: 'El sidebar es un ejemplo del RouterOulet' },
      },
    },
    {
      name: 'Tabla JSON',
      route: '/json-table',
      isOpen: false,
      menu: {
        name: 'Tabla JSON',
        Open: false,
        submenu: { name: 'El sidebar es un ejemplo del RouterOulet' },
      },
    },
    {
      name: 'Tabla de la API',
      route: '/api-table',
      isOpen: false,
      menu: {
        name: 'Tabla API',
        Open: false,
        submenu: { name: 'El sidebar es un ejemplo del RouterOulet' },
      },
    },
    {
      name: 'Gráfica Básica',
      route: '/basic-graph',
      isOpen: false,
      menu: {
        name: 'Gráficas',
        Open: false,
        submenu: { name: 'El sidebar es un ejemplo del RouterOulet' },
      },
    },
    {
      name: 'Gráfica Especializada',
      route: '/assigned-graph',
      isOpen: false,
      menu: {
        name: 'Gráficas',
        Open: false,
        submenu: { name: 'El sidebar es un ejemplo del RouterOulet' },
      },
    },
    {
      name: 'Gráfica de la API',
      route: '/api-graph',
      isOpen: false,
      menu: {
        name: 'Gráficas',
        Open: false,
        submenu: { name: 'El sidebar es un ejemplo del RouterOulet' },
      },
    },
    {
      name: 'Gráfica JSON',
      route: '/json-graph',
      isOpen: false,
      menu: {
        name: 'Gráficas',
        Open: false,
        submenu: { name: 'El sidebar es un ejemplo del RouterOulet' },
      },
    },
  ];

  //
  get displayedItems() {
    if (!this.searchTerm.trim()) {
      return this.sidebarItems.filter(item => item.route === this.currentRoute);
    }
    return this.sidebarItems.filter(item => 
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.menu.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  

  // Función para abrir/cerrar el primer nivel de submenú
  toggleDropdown(index: number) {
    this.sidebarItems.forEach((item, i) => {
      if (i === index) {
        item.isOpen = !item.isOpen;
        item.menu.Open = item.isOpen;
      } else {
        item.isOpen = false;
        item.menu.Open = false; 
      }
    });
  }
  
  

  // Función para abrir/cerrar el submenú
  toggleSubmenu(index: number): void {
    const item = this.sidebarItems[index];
  
    // Alternar solo el submenú sin afectar otros
    item.menu.Open = !item.menu.Open;
  
    if (item.menu.Open) {
      item.isOpen = true;
    }
  }
  
  
}
