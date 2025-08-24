import { inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  usuario = signal<any | null>(null);
  cargando = signal(false);

  // Ahora retorna el observable para que el componente maneje la subscripción
  login(email: string, password: string) {
    this.cargando.set(true);
    return this.http.post<{ token: string; usuario: any }>(`${environment.apiUrl}/usuarios/login`, { email, password });
  }

  registrar(nombre: string, email: string, password: string) {
    return this.http.post(`${environment.apiUrl}/usuarios/registro`, { nombre, email, password });
  }

  logout() {
    localStorage.removeItem('token');
    this.usuario.set(null);
    this.router.navigate(['/login']);
  }

  isAutenticado() {
    return !!localStorage.getItem('token');
  }
}
