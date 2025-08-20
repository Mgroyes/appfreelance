import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // ✅ Ajusta si tu ruta cambia

@Component({
  standalone: true,
  selector: 'app-registro-page',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="bg-white shadow-md p-8 rounded-lg w-full max-w-md">
        <h1 class="text-2xl font-bold mb-6 text-center">Registro</h1>

        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-4">
          <div>
            <input
              type="text"
              formControlName="nombre"
              placeholder="Nombre completo"
              class="input input-bordered w-full"
            />
            <p *ngIf="form.get('nombre')?.invalid && form.get('nombre')?.touched" class="text-red-500 text-sm mt-1">
              Nombre requerido
            </p>
          </div>

          <div>
            <input
              type="email"
              formControlName="email"
              placeholder="Correo electrónico"
              class="input input-bordered w-full"
            />
            <p *ngIf="form.get('email')?.invalid && form.get('email')?.touched" class="text-red-500 text-sm mt-1">
              Email inválido
            </p>
          </div>

          <div>
            <input
              type="password"
              formControlName="password"
              placeholder="Contraseña"
              class="input input-bordered w-full"
            />
            <p *ngIf="form.get('password')?.invalid && form.get('password')?.touched" class="text-red-500 text-sm mt-1">
              Contraseña requerida
            </p>
          </div>

          <button type="submit" class="btn btn-primary w-full" [disabled]="form.invalid">
            Registrarse
          </button>
        </form>

        <p class="mt-4 text-sm text-center">
          ¿Ya tienes cuenta?
          <a routerLink="/login" class="text-blue-500 underline">Inicia sesión</a>
        </p>
      </div>
    </div>
  `
})
export default class RegistroPage {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService); // ✅ Inyectar el servicio de autenticación

  form = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { nombre, email, password } = this.form.value;

    console.log('🟢 Registro data:', { nombre, email, password });

    this.authService.registrar(nombre!, email!, password!); // ✅ Ejecuta el registro real
  }
}
