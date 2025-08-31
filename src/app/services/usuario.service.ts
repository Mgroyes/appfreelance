import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/usuario`;

  obtenerPerfil(): Observable<any> {
    return this.http.get(`${this.apiUrl}/perfil`);
  }

  editarPerfil(data: { nombre: string; email: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/perfil`, data);
  }

  cambiarPassword(data: { actual: string; nueva: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/password`, data);
  }
}
