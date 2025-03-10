import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-table',
  imports: [MatTableModule, MatInputModule, FormsModule],
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent {
  displayedColumns: string[] = ['position', 'Nombre', 'Apellido Paterno', 'Apellido Materno', 'CdFavorita'];
  dataSource = ELEMENT_DATA;
  filterValue: string = '';  // Variable para el valor del filtro

  get filteredDataSource() {
    if (!this.filterValue) {
      return this.dataSource;
    }
    return this.dataSource.filter(element => {
      return element.Nombre.toLowerCase().includes(this.filterValue.toLowerCase()) ||
             element.Apellido_Paterno.toLowerCase().includes(this.filterValue.toLowerCase()) ||
             element.Apellido_Materno.toLowerCase().includes(this.filterValue.toLowerCase()) ||
             element.CdFavorita.toLowerCase().includes(this.filterValue.toLowerCase());
    });
  }
}

export interface PeriodicElement {
  Nombre: string;
  Apellido_Paterno: string;
  Apellido_Materno: string;
  position: number;
  CdFavorita: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, Nombre: 'Ailton', Apellido_Paterno: 'Artiaga', Apellido_Materno: 'Quiroga', CdFavorita: 'Ciudad1' },
  { position: 2, Nombre: 'Helium', Apellido_Paterno: 'Helium', Apellido_Materno: '', CdFavorita: 'Ciudad2' },
  { position: 3, Nombre: 'Lithium', Apellido_Paterno: 'Lithium', Apellido_Materno: '', CdFavorita: 'Ciudad3' },
  { position: 4, Nombre: 'Beryllium', Apellido_Paterno: 'Beryllium', Apellido_Materno: '', CdFavorita: 'Ciudad4' },
  { position: 5, Nombre: 'Boron', Apellido_Paterno: 'Boron', Apellido_Materno: '', CdFavorita: 'Ciudad5' },
  { position: 6, Nombre: 'Carbon', Apellido_Paterno: 'Carbon', Apellido_Materno: '', CdFavorita: 'Ciudad6' },
  { position: 7, Nombre: 'Nitrogen', Apellido_Paterno: 'Nitrogen', Apellido_Materno: '', CdFavorita: 'Ciudad7' },
  { position: 8, Nombre: 'Oxygen', Apellido_Paterno: 'Oxygen', Apellido_Materno: '', CdFavorita: 'Ciudad8' },
  { position: 9, Nombre: 'Fluorine', Apellido_Paterno: 'Fluorine', Apellido_Materno: '', CdFavorita: 'Ciudad9' },
  { position: 10, Nombre: 'Neon', Apellido_Paterno: 'Neon', Apellido_Materno: '', CdFavorita: 'Ciudad10' },
  // Agrega más elementos según lo necesites...
];
