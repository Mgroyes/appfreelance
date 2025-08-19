import { inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  usuario = signal<any | null>(null);
  cargando = signal(false);

  login(email: string, password: string) {
    this.cargando.set(true);
    this.http.post('/api/usuarios/login', { email, password })
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('token', res.token);
          this.usuario.set(res.usuario);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => alert(err.error.error || 'Error al iniciar sesión'),
        complete: () => this.cargando.set(false)
      });
  }

  registrar(nombre: string, email: string, password: string) {
    this.http.post('/api/usuarios/registro', { nombre, email, password })
      .subscribe({
        next: () => {
          alert('Usuario registrado. Puedes iniciar sesión.');
          this.router.navigate(['/login']);
        },
        error: (err) => alert(err.error.error || 'Error en el registro'),
      });
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
