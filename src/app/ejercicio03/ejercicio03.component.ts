import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    {{ username }}
  `,
})
export class userComponent{
  username='Amaury1285';
}

@Component({
  selector: 'app-ejercicio03',
  imports: [userComponent],
  templateUrl: './ejercicio03.component.html',
  styleUrl: './ejercicio03.component.css'
})
export class Ejercicio03Component {
}
