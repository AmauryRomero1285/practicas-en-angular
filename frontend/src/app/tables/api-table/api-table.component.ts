import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { SocketsService } from '../../services/sockets/sockets.service';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-table',
  imports: [CommonModule],
  templateUrl: './api-table.component.html',
  styleUrl: './api-table.component.css'
})
export class ApiTableComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('dataTable', { static: false }) table!: ElementRef;
  dtTrigger: Subject<any> = new Subject<any>();
  data: any[] = [];
  dataTableInstance: any;

  constructor(private apiService: ApiService, private socketsService: SocketsService) {}

  ngOnInit(): void {
    // Cargar datos iniciales desde la API
    this.apiService.getAll().subscribe((data) => {
      this.data = data;
      this.dtTrigger.next(null);
    });

    // Escuchar actualizaciones en tiempo real desde WebSockets
    this.socketsService.onDataUpdate().subscribe((newData) => {
      this.updateTable(newData);
    });
  }

  ngAfterViewInit(): void {
    this.dataTableInstance = $(this.table.nativeElement).DataTable();
  }

  // Función para actualizar la tabla con datos nuevos
  updateTable(newData: any) {
    this.dataTableInstance.clear(); // Limpiar la tabla
    this.dataTableInstance.rows.add(newData); // Agregar nuevas filas
    this.dataTableInstance.draw(); // Redibujar la tabla
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    this.dataTableInstance.destroy(); // Destruir instancia de DataTable al salir
  }
}