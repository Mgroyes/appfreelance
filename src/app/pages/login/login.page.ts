import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login-page',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export default class LoginPage {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

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

    
    this.authService.login(email!, password!).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.authService.usuario.set(res.usuario);
        this.authService.cargando.set(false);
        console.log('✅ Login correcto, navegando al dashboard');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.authService.cargando.set(false);
        alert(err.error?.error || 'Error al iniciar sesión');
      }
    });
  }
}
