import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // ✅ Ajusta si tu ruta cambia

@Component({
  standalone: true,
  selector: 'app-registro-page',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
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
