import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import NavbarComponent from '../navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <main class="p-4">
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./layout.component.css']
})
export default class LayoutComponent {}
