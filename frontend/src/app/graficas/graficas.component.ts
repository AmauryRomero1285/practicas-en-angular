import { Component } from '@angular/core';
import { GraficaBasicaComponent } from '../grafica-basica/grafica-basica.component';
import { GraficaEspecializadaComponent } from '../grafica-especializada/grafica-especializada.component';

@Component({
  selector: 'app-graficas',
  imports: [GraficaBasicaComponent, GraficaEspecializadaComponent],
  templateUrl: './graficas.component.html',
  styleUrl: './graficas.component.css'
})
export class GraficasComponent {

}
