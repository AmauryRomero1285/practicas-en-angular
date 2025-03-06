import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule,FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  searchTerm: string = '';

  sidebarItems = [
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
  get filteredItems() {
    return this.sidebarItems.filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
