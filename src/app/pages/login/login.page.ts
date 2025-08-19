import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login-page',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="bg-white shadow-md p-8 rounded-lg w-full max-w-md">
        <h1 class="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h1>

        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-4">
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
            Ingresar
          </button>
        </form>

        <p class="mt-4 text-sm text-center">
          ¿No tienes cuenta?
          <a routerLink="/registro" class="text-blue-500 underline">Regístrate</a>
        </p>
      </div>
    </div>
  `
})
export default class LoginPage {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { email, password } = this.form.value;
    console.log('🟢 Login data:', { email, password });

    // TODO: Conectar al AuthService
  }
}
