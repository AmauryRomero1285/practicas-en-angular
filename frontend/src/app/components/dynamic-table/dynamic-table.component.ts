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

export interface cityFavorite {
  Nombre: string;
  Apellido_Paterno: string;
  Apellido_Materno: string;
  position: number;
  CdFavorita: string;
}

const ELEMENT_DATA: cityFavorite[] = [
  { position: 0, Nombre: 'Marcos', Apellido_Paterno: 'Ramírez', Apellido_Materno: 'Hernández', CdFavorita: 'Amsterdam' },
  { position: 1, Nombre: 'Ailton', Apellido_Paterno: 'Artiaga', Apellido_Materno: 'Quiroga', CdFavorita: 'Cancún' },
  { position: 2, Nombre: 'Dulce', Apellido_Paterno: 'Balderas', Apellido_Materno: 'Gomez', CdFavorita: 'New York' },
  { position: 3, Nombre: 'Daniel de Jesús', Apellido_Paterno: 'Bravo', Apellido_Materno: 'Godínez', CdFavorita: 'Saltillo' },
  { position: 4, Nombre: 'Edgar', Apellido_Paterno: 'Cabrera', Apellido_Materno: 'Velázquez', CdFavorita: 'Los Cabos' },
  { position: 5, Nombre: 'Jesús Antonio', Apellido_Paterno: 'Estrada', Apellido_Materno: 'Jímenez', CdFavorita: '' },
  { position: 6, Nombre: 'Osvaldo Abishai', Apellido_Paterno: 'Flores', Apellido_Materno: 'Campos', CdFavorita: 'Ciudad de México' },
  { position: 7, Nombre: 'Carlos Isaac', Apellido_Paterno: 'Fosado', Apellido_Materno: 'Escudero', CdFavorita: 'Xicotepec de Juárez' },
  { position: 8, Nombre: 'Lorena Citlalli', Apellido_Paterno: 'Galindo', Apellido_Materno: 'Gonzalez', CdFavorita: 'Berna' },
  { position: 9, Nombre: 'Esther', Apellido_Paterno: 'González', Apellido_Materno: 'Peralta', CdFavorita: 'Madrid' },
  { position: 10, Nombre: 'Abril', Apellido_Paterno: 'Barrera', Apellido_Materno: 'Guzmán', CdFavorita: 'Xicotepec de Juárez' },
  { position: 11, Nombre: 'Tania', Apellido_Paterno: 'Ibarra', Apellido_Materno: 'Salgado', CdFavorita: 'Tokyo' },
  { position: 12, Nombre: 'Jose Agustin', Apellido_Paterno: 'Jimenez', Apellido_Materno: 'Castillo', CdFavorita: 'Veracruz' },
  { position: 13, Nombre: 'Brandon', Apellido_Paterno: 'Leon', Apellido_Materno: 'Cabrera', CdFavorita: 'Los Angeles' },
  { position: 14, Nombre: 'Ana Daniela', Apellido_Paterno: 'López', Apellido_Materno: 'Neri', CdFavorita: 'Xicotepec de Juárez' },
  { position: 15, Nombre: 'Jouse Atlai', Apellido_Paterno: 'Matínez', Apellido_Materno: 'Otero', CdFavorita: 'Ciudad de México' },
  { position: 16, Nombre: 'Uriel Abdallah', Apellido_Paterno: 'Medina', Apellido_Materno: 'Torres', CdFavorita: 'Seúl' },
  { position: 17, Nombre: 'Brian Jesús', Apellido_Paterno: 'Marquez', Apellido_Materno: 'Mendoza', CdFavorita: 'Tokyo' },
  { position: 18, Nombre: 'Karen Lizbeth', Apellido_Paterno: 'Negrete', Apellido_Materno: 'Hernández', CdFavorita: 'Xicotepec de juárez' },
  { position: 19, Nombre: 'Antonio', Apellido_Paterno: 'Ocpaco', Apellido_Materno: 'Dolores', CdFavorita: '' },
  { position: 20, Nombre: 'Jonathan Baldemar', Apellido_Paterno: 'Ramírez', Apellido_Materno: 'Reyes', CdFavorita: 'París' },
  { position: 21, Nombre: 'Marcos Jesús', Apellido_Paterno: 'Ríos', Apellido_Materno: 'Durán', CdFavorita: 'Orizaba' },
  { position: 22, Nombre: 'Cristhian Paul', Apellido_Paterno: 'Rodríguez', Apellido_Materno: 'Perez', CdFavorita: 'Madrid' },
  { position: 23, Nombre: 'Yáred Amaury', Apellido_Paterno: 'Romero', Apellido_Materno: 'Martínez', CdFavorita: 'Ginebra' },
  { position: 24, Nombre: 'Ángel de Jesús', Apellido_Paterno: 'Rufino', Apellido_Materno: 'Mendoza', CdFavorita: 'Ciudad Maderas' },
  { position: 25, Nombre: 'Diego Salvador', Apellido_Paterno: 'Tecorralco', Apellido_Materno: 'Martínez', CdFavorita: 'Bankog' },
  { position: 26, Nombre: 'Guadalupe Idai', Apellido_Paterno: 'Vargas', Apellido_Materno: 'Galindo', CdFavorita: 'Texxcoco' },
  { position: 27, Nombre: 'Juvenal', Apellido_Paterno: 'Víveros', Apellido_Materno: 'Martínez', CdFavorita: 'Moscú' },
  { position: 28, Nombre: 'Zyanya Ahuachtli', Apellido_Paterno: 'Zacatenco', Apellido_Materno: 'Pedrosa', CdFavorita: 'Ciudad de México' },
];
