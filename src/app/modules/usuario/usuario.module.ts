import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    LoginComponent, 
    ProfileComponent,
    RouterModule
  ]
})
export class UsuarioModule { }
  