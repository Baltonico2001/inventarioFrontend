import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './all.component.html',
})
export class AllComponent implements OnInit {
  users: any[] = [];
  editingUserId: string | null = null; //  Guarda el usuario en edición

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.usuarioService.getUsers().subscribe({
      next: (data) => {
        console.log(' Usuarios recibidos:', data);
        this.users = data;
      },
      error: (err) => {
        console.error(' Error al obtener usuarios:', err);
      },
    });
  }

  deleteUser(id: string) {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.usuarioService.deleteUser(id).subscribe({
        next: () => {
          console.log(` Usuario eliminado: ${id}`);
          this.users = this.users.filter((user) => user._id !== id);
        },
        error: (err) => {
          console.error('Error al eliminar usuario:', err);
        },
      });
    }
  }

  onEdit(user: any) {
    this.editingUserId = user._id; //  Guarda el ID del usuario en edición
  }

  saveChanges(user: any) {
    this.usuarioService.updateUser(user._id, user).subscribe({
      next: () => {
        console.log(` Usuario actualizado:`, user);
        this.editingUserId = null; // ✅ Ocultar la edición después de actualizar
      },
      error: (err) => {
        console.error(' Error al actualizar usuario:', err);
      },
    });
  }
}
