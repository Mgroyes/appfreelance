import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service'; 

@Component({
  standalone: true,
  selector: 'app-registro-page',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export default class RegistroPage {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

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

    this.authService.registrar(nombre!, email!, password!).subscribe({
      next: (resp) => {
        console.log('✅ Registro exitoso', resp);
        
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('❌ Error en registro', err);
        
      }
    });
  }
}
