import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketsService {
  private socket: Socket;
  private SERVER_URL = 'http://localhost:3000'; // Cambia a tu servidor de WebSockets

  constructor() {
    this.socket = io(this.SERVER_URL);
  }

  // Escuchar eventos del servidor
  onDataUpdate(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('data-update', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.off('data-update');
      };
    });
  }

  // Enviar datos al servidor si es necesario
  sendData(data: any): void {
    this.socket.emit('send-data', data);
  }
}
