import { Component } from '@angular/core';
import { Helper10Component } from './helper10/helper10.component';

@Component({
  selector: 'app-ejercicio10',
  imports: [Helper10Component],
  template: `<div>
  <h1>Lo que siento por la música</h1>
  <article>
    <p>
      La música es mi mayor pasión, y esta es la razón. La música tiene la capacidad única de 
      transmitir emociones de una manera que ninguna otra forma de arte puede hacerlo. Desde las 
      melodías más suaves hasta los ritmos más intensos, la música nos conecta con nuestros 
      sentimientos y nos transporta a otros mundos.
    </p>
    <p>
      No puedo expresar lo mucho que disfruto escuchar y crear música. Es una experiencia 
      incomparable que nos permite comunicarnos sin necesidad de palabras. Me encanta que los 
      músicos y compositores dediquen su tiempo a perfeccionar su arte y nos regalen piezas 
      inolvidables. Realmente quieren que la música sea lo mejor que puede ser, y hacen un trabajo 
      asombroso en ello. Esta declaración viene del corazón y no es para nada repetitiva. De hecho, 
      creo que repetiré estas mismas ideas algunas veces más.
    </p>
  </article>

  @defer (on viewport) {
    <app-helper10 class="other"/>
  } @placeholder {
    <p class="placeholder">Futuros comentarios</p>
  } @loading (minimum 2s) {
    <p class="loading">Cargando comentarios...</p>
  }
</div>` 
,
  styleUrl: './ejercicio10.component.css'
})
export class Ejercicio10Component {

}
