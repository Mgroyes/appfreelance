import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login.page').then(m => m.LoginPage)
  },
  {
    path: '',
    loadComponent: () => import('./components/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard.page').then(m => m.DashboardPage)
      }
      // Aquí se agregarán más rutas protegidas luego
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found.page').then(m => m.NotFoundPage)
  }
];
