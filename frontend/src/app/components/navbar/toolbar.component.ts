import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-toolbar',
  standalone: true, // Especificar si es standalone
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  isSidebarVisible = true;
  //
  constructor(private authService: AuthService) {}

  onLogout(): void {
    this.authService.logout();
    console.log('Logged out, state: ' + this.authService.logout());
  }
  //


  dropdownExercises = [
    //ejercicios
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
  ];
  dropdownTables = [
    //tablas
    { name: 'Tabla Dinámica', route: '/simple-table' },
    { name: 'Tabla de Datos', route: '/dataTable-table' },
    { name: 'Tabla JSON', route: '/json-table' },
    { name: 'Tabla de la API', route: '/api-table' },
  ];

  dropdownGraphics = [
    //graficas
    { name: 'Gráfica Básica', route: '/graphic1' },
    { name: 'Gráfica Especializada', route: '/graphic2' },
  ];

  // Filtrar los elementos de ejercicios
  get filteredExercises() {
    return this.dropdownExercises
  }

  //filtrar tablas
  get filteredTables() {
    return this.dropdownTables
  }
    //filtrar graficas
    get filteredGraphics() {
      return this.dropdownGraphics
    }

  // Limitar la cantidad de elementos mostrados (máx. 15)
  get displayedExercises() {
    return this.filteredExercises;
  }
  // Limitar la cantidad de elementos mostrados (máx. 15)
  get displayedTables() {
    return this.filteredTables;
  }
    // Limitar la cantidad de elementos mostrados (máx. 15)
    get displayedGraphs() {
      return this.filteredGraphics;
    }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
