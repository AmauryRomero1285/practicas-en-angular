import { Component } from '@angular/core';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ContentComponent } from "./content/content.component";

@Component({
  selector: 'app-page-container',
  imports: [SidebarComponent, ContentComponent],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css'
})
export class PageContainerComponent {
  isSidebarVisible = true;
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
