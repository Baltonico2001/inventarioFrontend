import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component'; // ✅ Usa un componente raíz en lugar de un módulo

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
