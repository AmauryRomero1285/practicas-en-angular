import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-helper08',
  imports: [],
  template: `<p>Mi nombre es: <strong>{{ name }}</strong></p>`,
  styles: `
  p{
    color: blue;
    font-size:2rem;
  }
 `,
})
export class Helper08Component {
  @Input() name = '';
}
