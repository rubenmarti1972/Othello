import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app.routing.module';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule),
    provideHttpClient()            // si necesitas HTTP, por ejemplo
    // …otros providers globales
  ]
});
