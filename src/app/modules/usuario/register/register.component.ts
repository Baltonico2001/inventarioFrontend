import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  userData = { name: '', email: '', password: '' };

  constructor(private usuarioService: UsuarioService) {}

  /*registerUser() {
    fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(' Usuario registrado desde `fetch`:', data);
        alert('Registro exitoso!');
      })
      .catch((error) => {
        console.error(' Error al registrar usuario:', error);
        alert('Error al registrar usuario');
      });
  }*/

  registerUser() {
    //console.log(' Datos preparados antes de enviar:',JSON.stringify(this.userData)); //  Verificación en consola
    const payload = JSON.stringify(this.userData);

    this.usuarioService.createUser(payload).subscribe({
      next: (response) => {
        console.log(' Usuario registrado:', response);
        alert('Registro exitoso!');
      },
      error: (err) => {
        console.error(' Error al registrar usuario:', err);
        alert('Error al registrar usuario');
      },
    });
  }
}
