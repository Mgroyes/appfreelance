import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isLoggedIn = authService.isAutenticado();

  // ✅ Retornar redirección, no ejecutar navegación directamente
  return isLoggedIn ? true : router.parseUrl('/login');
};
