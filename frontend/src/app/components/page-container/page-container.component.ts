import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from '../footer/footer.component';
import { ToolbarComponent } from '../navbar/toolbar.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-page-container',
  imports: [
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    ToolbarComponent,
    BreadcrumbComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css',
})
export class PageContainerComponent {
  isSidebarVisible = true;
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
   isLoggedIn: boolean=true;
  constructor(private authService: AuthService) {
    // Suscribirse al observable para mantener el estado actualizado
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }
}
