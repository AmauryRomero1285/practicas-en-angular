import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SensoresService {
  private apiUrl = 'http://192.168.155.135:3000/sensoresyactuadores'; // Cambia según tu API

  constructor(private http: HttpClient) {}

  obtenerDatos(pagina: number, tamano: number, orden: string, direccion: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${pagina}&size=${tamano}&sort=${orden},${direccion}`);
  }
}
