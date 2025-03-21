import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from "./components/page-container/page-container.component";
import { FormsModule } from '@angular/forms';
import { FormsComponent } from "./components/login/forms.component";
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PageContainerComponent,
    FormsModule,
    FormsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ManualEjercicios_Angular_230190';
  constructor(public authService: AuthService) {}
}
