import { bootstrapApplication } from '@angular/platform-browser';
import{provideAnimations} from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent,{
    providers:[
      provideAnimations(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(),//reemplazar por browseranimationsmodule
    ]
})
  .catch((err) => console.error(err));
