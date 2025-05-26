import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioService } from './usuario.service';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

//  Importamos los componentes standalone directamente en `imports`
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    LoginComponent, // ✅ Así deben estar los componentes standalone
    ProfileComponent,
    RegisterComponent,
  ],
  providers: [UsuarioService, provideHttpClient(withInterceptorsFromDi())],
})
export class UsuarioModule {}
