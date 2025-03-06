import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from '../footer/footer.component';
import { ToolbarComponent } from '../navbar/toolbar.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { FormsComponent } from '../forms/forms.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-container',
  imports: [
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    ToolbarComponent,
    BreadcrumbComponent,
    FormsComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css',
})
export class PageContainerComponent {
  isSidebarVisible = true;
  isLoggedIn = false;
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  logout() {
    this.isLoggedIn = false;
  }

  login() {
    this.isLoggedIn = true;
  }
}
