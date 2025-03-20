import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  standalone: true, // Especificar si es standalone
  imports: [RouterModule, CommonModule,FormsModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  isSidebarVisible = true;
  isLoggedIn = true;
  searchTerm: string = '';

  // Lista completa de elementos
  dropdownItems = [
    { name: 'Ejercicio 1', route: '/page1' },
    { name: 'Ejercicio 2', route: '/page2' },
    { name: 'Ejercicio 3', route: '/page3' },
    { name: 'Ejercicio 4', route: '/page4' },
    { name: 'Ejercicio 5', route: '/page5' },
    { name: 'Ejercicio 6', route: '/page6' },
    { name: 'Ejercicio 7', route: '/page7' },
    { name: 'Ejercicio 8', route: '/page8' },
    { name: 'Ejercicio 9', route: '/page9' },
    { name: 'Ejercicio 10', route: '/page10' },
    { name: 'Ejercicio 11', route: '/page11' },
    { name: 'Ejercicio 12', route: '/page12' },
    { name: 'Tabla', route: '/table' },
    { name: 'Gráficas', route: '/graphics' },
  ];

  // Filtrar los elementos según la búsqueda
  get filteredItems() {
    return this.dropdownItems.filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Limitar la cantidad de elementos mostrados (máx. 15)
  get displayedItems() {
    return this.filteredItems;
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

}
