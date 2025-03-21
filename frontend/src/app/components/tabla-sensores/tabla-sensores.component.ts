import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SensoresService } from '../../services/sensores.service';

@Component({
  selector: 'app-tabla-sensores',
  templateUrl: './tabla-sensores.component.html',
  styleUrls: ['./tabla-sensores.component.css']
})
export class TablaSensoresComponent implements OnInit {
  columnas: string[] = ['tipo', 'nombre', 'valor', 'fechaHora'];
  dataSource = new MatTableDataSource<any>([]);
  totalRegistros = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private sensoresService: SensoresService) {}

  ngOnInit(): void {
    this.cargarDatos(0, 5, 'fechaHora', 'desc');
  }

  cargarDatos(pagina: number, tamano: number, orden: string, direccion: string): void {
    this.sensoresService.obtenerDatos(pagina, tamano, orden, direccion).subscribe(res => {
      this.dataSource.data = res.datos;
      this.totalRegistros = res.total;
    });
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(() => {
      this.cargarDatos(this.paginator.pageIndex, this.paginator.pageSize, 'fechaHora', 'desc');
    });

    this.sort.sortChange.subscribe(() => {
      this.cargarDatos(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction);
    });
  }
}
