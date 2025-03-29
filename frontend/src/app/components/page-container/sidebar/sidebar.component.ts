import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  currentRoute: string = '';

  //
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;

        // Asegurar que el item correspondiente esté abierto
        this.sidebarItems.forEach((item) => {
          item.isOpen = item.route === this.currentRoute;
          item.menu.Open = item.isOpen;
        });
      }
    });
  }

  //
  searchTerm: string = '';
  sidebarItems = [
    {
      name: 'Practica 01',
      route: '/page1',
      isOpen: false,
      menu: {
        name: 'Objetivo. Poner en practica la actualización de plantillas y estilo de componentes de Angular',
        Open: false,
        submenu: {
          name: 'Los componentes son los elementos básicos para cualquier aplicación Angular. Cada componente esta conformado por tres partes: clase en TypeScript, plantilla HTML y estilos CSS ',
        },
      },
    },
    {
      name: 'Practica 02',
      route: '/page2',
      isOpen: false,
      menu: {
        name: 'Objetivo. Poner en practica la actualización de la clase de un componente y uso de la interpolación.',
        Open: false,
        submenu: {
          name: 'En Angular, la lógica y el comportamiento del componente se definen en la clase TypeScript del componente.',
        },
      },
    },
    {
      name: 'Practica 03',
      route: '/page3',
      isOpen: false,
      menu: {
        name: 'Objetivo. Practica de composición de los componentes.',
        Open: false,
        submenu: {
          name: 'La propiedad <selector> de la configuración del componente le proporciona un nombre para usar al hacer referencia al componente en otra plantilla. El <selector> se usa como una etiqueta HTML, por ejemplo, app-user sería <app-user/> en la plantilla.',
        },
      },
    },
    {
      name: 'Practica 04',
      route: '/page4',
      isOpen: false,
      menu: {
        name: 'Objetivo. Practica del uso de condicionales en plantillas.',
        Open: false,
        submenu: {
          name: 'En esta actividad se pone en practica el uso del *ngIf para mostrar u ocultar elementos en una plantilla.',
        },
      },
    },
    {
      name: 'Practica 05',
      route: '/page5',
      isOpen: false,
      menu: {
        name: 'objetivo. Practica del uso de bucles en plantillas.',
        Open: false,
        submenu: {
          name: 'En esta actividad se pone en practica el uso del @for para repetir elementos en una plantilla.',
        },
      },
    },
    {
      name: 'Practica 06',
      route: '/page6',
      isOpen: false,
      menu: {
        name: 'Objetivo. Practica del uso de eventos en plantillas.',
        Open: false,
        submenu: {
          name: 'En esta actividad se pone en practica la vinculación de propiedades entre plantillas.',
        },
      },
    },
    {
      name: 'Practica 07',
      route: '/page7',
      isOpen: false,
      menu: {
        name: 'Objetivo. Practica del uso de eventos en plantillas.',
        Open: false,
        submenu: {
          name: 'En esta actividad se pone en practica el uso de un controlador de eventos.',
        },
      },
    },
    {
      name: 'Practica 08',
      route: '/page8',
      isOpen: false,
      menu: {
        name: 'Objetivo. Practica del uso de eventos en plantillas.',
        Open: false,
        submenu: {
          name: 'En esta actividad se pone en practica el uso de @Input para enviar información entre componentes.',
        },
      },
    },
    {
      name: 'Practica 09',
      route: '/page9',
      isOpen: false,
      menu: {
        name: 'Objetivo. Practica del uso de eventos en plantillas.',
        Open: false,
        submenu: {
          name: 'En esta actividad se pone en practica el uso de @Output para recibir información entre componentes.',
        },
      },
    },
    {
      name: 'Practica 10',
      route: '/page10',
      isOpen: false,
      menu: {
        name: 'Objetivo.Practica de vistas diferibles en Angular.',
        Open: false,
        submenu: {
          name: 'En esta actividad se ponen en practica las vistas diferibles para prolongar la carga de una sección en la misma plantilla del componente.',
        },
      },
    },
    {
      name: 'Practica 11',
      route: '/page11',
      isOpen: false,
      menu: {
        name: 'Objetivo. Practicar el uso de NgOptimizedImage.',
        Open: false,
        submenu: {
          name: ' En esta actividad se pone en practica el NgOptimizedImage para garantizar que las imagenes se carguen de manera eficiente.',
        },
      },
    },
    {
      name: 'Practica 12',
      route: '/page12',
      isOpen: false,
      menu: {
        name: 'Objetivo. Practicar el enrutamiento en Angular.',
        Open: false,
        submenu: {
          name: 'En esta actividad se pone en practica la configuración y enrutamiento de Angular Router.',
        },
      },
    },
    {
      name: 'Tabla Dinámica',
      route: '/simple-table',
      isOpen: false,
      menu: {
        name: 'Objetivo. Uso de angular-datatables.',
        Open: false,
        submenu: {
          name: 'En esta actividad se pone en practica el uso de una datatable basica en Angular mediante la dependencia de angular-datatables.',
        },
      },
    },
    {
      name: 'Tabla de Datos',
      route: '/dataTable-table',
      isOpen: false,
      menu: {
        name: 'Objetivo. Implementar una datatable con opciones.',
        Open: false,
        submenu: {
          name: 'En esta actividad se pone en practica el uso de una datatable con opciones mediante la dependencia de angular-datatables.',
        },
      },
    },
    {
      name: 'Tabla JSON',
      route: '/json-table',
      isOpen: false,
      menu: {
        name: 'Objetivo. Importar una tabla de angular-datatables usando datos estaticos de un json',
        Open: false,
        submenu: {
          name: ' En esta actividad se pone en practica el uso de una datatable que muestra los datos estaticos de un json.',
        },
      },
    },
    {
      name: 'Tabla de la API',
      route: '/api-table',
      isOpen: false,
      menu: {
        name: 'Objetivo. Importar una tabla de angular-datatables usando datos de una API',
        Open: false,
        submenu: {
          name: 'En esta actividad se pone en practica el uso de una datatable que muestra los datos dinamicos consumidos por una API.',
        },
      },
    },
    {
      name: 'Gráfica Básica',
      route: '/basic-graph',
      isOpen: false,
      menu: {
        name: 'Objetivo. Importar una grafica de amcharts usando datos estaticos',
        Open: false,
        submenu: {
          name: ' En esta actividad se pone en practica el uso de una grafica con datos estaticos.',
        },
      },
    },
    {
      name: 'Gráfica Especializada',
      route: '/assigned-graph',
      isOpen: false,
      menu: {
        name: 'Objetivo. Importar una grafica de amcharts usando datos estaticos asignada por el docente',
        Open: false,
        submenu: {
          name: 'En esta actividad se pone en practica el uso de una grafica asignada por el docente.',
        },
      },
    },
    {
      name: 'Gráfica de la API',
      route: '/api-graph',
      isOpen: false,
      menu: {
        name: 'Objetivo. Importar una grafica de amcharts usando datos de una API',
        Open: false,
        submenu: {
          name: 'En esta actividad se pone en practica el uso de una grafica que muestra los datos dinamicos consumidos de una API',
        },
      },
    },
    {
      name: 'Gráfica JSON',
      route: '/json-graph',
      isOpen: false,
      menu: {
        name: 'Objetivo. Importar una grafica de amcharts usando datos estaticos de un json',
        Open: false,
        submenu: {
          name: 'En esta actividad se pone en practica el uso de una grafica con datos estaticos de un json',
        },
      },
    },
  ];

  //
  get displayedItems() {
    if (!this.searchTerm.trim()) {
      return this.sidebarItems.filter(
        (item) => item.route === this.currentRoute
      );
    }
    return this.sidebarItems.filter(
      (item) =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.menu.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Función para abrir/cerrar el primer nivel de submenú
  toggleDropdown(index: number) {
    this.sidebarItems.forEach((item, i) => {
      if (i === index) {
        item.isOpen = !item.isOpen;
        item.menu.Open = item.isOpen;
      } else {
        item.isOpen = false;
        item.menu.Open = false;
      }
    });
  }

  // Función para abrir/cerrar el submenú
  toggleSubmenu(index: number): void {
    const item = this.sidebarItems[index];

    // Alternar solo el submenú sin afectar otros
    item.menu.Open = !item.menu.Open;

    if (item.menu.Open) {
      item.isOpen = true;
    }
  }
  
}
