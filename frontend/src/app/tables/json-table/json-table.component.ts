import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';


@Component({
  selector: 'app-json-table',
  imports: [CommonModule, DataTablesModule],
  templateUrl: './json-table.component.html',
  styleUrl: './json-table.component.css',
})
export class JsonTableComponent implements OnInit,OnDestroy{
  dtOptions: any = {};  
  dtTrigger: Subject<any> = new Subject<any>();
  sensores: any[] = [];
  filasVisibles: boolean[] = [true, true, true, true];

  @ViewChild('buscador') buscador!: ElementRef;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.dtOptions = {
      paging: false,  // Desactivar la paginación
      searching: true, // Activar la búsqueda
      responsive: true,
      dom: 'lfrtip', // Permite búsqueda, filtros y paginación
      language: {
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ registros",
        info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
        paginate: {
          first: "Primero",
          last: "Último",
          next: "Siguiente",
          previous: "Anterior"
        }
      }
    };

    this.http.get<any[]>('/app/assets/data.json').subscribe(data => {
      this.sensores = data;
      this.dtTrigger.next(null);
    });
  }

  toggleFila(index: number) {
    this.filasVisibles[index] = !this.filasVisibles[index];
  }

  buscarTexto(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    const table = (window as any).$('#miTabla').DataTable();
    table.search(filter).draw(); 
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
