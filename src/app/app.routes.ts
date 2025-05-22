import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: '/usuario', pathMatch: 'full' }, // 🔹 Redirección automática a usuario
  {
    path: 'usuario',
    loadChildren: () =>
      import('./modules/usuario/usuario.module').then((m) => m.UsuarioModule),
  },
];
  
  
