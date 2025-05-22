import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { UsuarioModule } from './app/modules/usuario/usuario.module';

bootstrapApplication(UsuarioModule, {
  providers: [provideRouter(routes)],
});
