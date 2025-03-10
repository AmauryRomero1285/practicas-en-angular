import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from "./components/page-container/page-container.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PageContainerComponent,
    FormsModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ManualEjercicios_Angular_230190';
}
