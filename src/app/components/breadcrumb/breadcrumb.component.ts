import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  imports: [],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {
@Input() isSidebarVisible: boolean = true;
}
