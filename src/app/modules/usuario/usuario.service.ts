import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/user'; // Asegúrate de que esta es la URL correcta del backend

  constructor(private http: HttpClient) {}

  //crear usuario
  createUser(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json', // Cambio clave para evitar conflictos de respuesta
    });
  }

  //obetener todos los usuarios
  public getUsers(): Observable<any> {
    return this.http.get(this.apiUrl); //  Solicitud directa a la API
  }

  //eliminar usuario por id
  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  // Actualizar usuario por id
  updateUser(id: string, updatedData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
