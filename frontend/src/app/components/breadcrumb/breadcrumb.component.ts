import { Component,Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-breadcrumb',
  imports: [ CommonModule, FormsModule,RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent implements OnInit {
@Input() isSidebarVisible: boolean = true;

breadcrumbs: { label: string; url: string }[] = [];
activeRoute: string = '';

constructor(private router: Router) {}

ngOnInit(): void {
  this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: any) => {
      this.activeRoute = event.urlAfterRedirects; // Guarda la ruta activa
      this.addBreadcrumb(event.urlAfterRedirects);
    });
}

private addBreadcrumb(url: string): void {
  const label = decodeURIComponent(url.split('/').pop() || 'Inicio');

  // Verifica si la ruta ya existe en el breadcrumb
  if (!this.breadcrumbs.some(b => b.url === url)) {
    this.breadcrumbs.push({ label, url });
  }
}

navigateTo(url: string) {
  this.router.navigateByUrl(url);
}


}
