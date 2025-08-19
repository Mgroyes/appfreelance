import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 class="text-xl font-bold">App Freelancers</h1>
      <ul class="flex gap-4">
        <li><a routerLink="/dashboard" routerLinkActive="underline">Dashboard</a></li>
        <li><a routerLink="/login" routerLinkActive="underline">Logout</a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export default class NavbarComponent {}
