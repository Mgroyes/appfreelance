import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 class="text-xl font-bold">App Freelancers</h1>
      <ul class="flex gap-4">
        <li><a routerLink="/dashboard" routerLinkActive="underline">Dashboard</a></li>
        <li><a routerLink="/login" routerLinkActive="underline">Logout</a></li>
      </ul>
    </nav>
  `
})
export class NavbarComponent {}
