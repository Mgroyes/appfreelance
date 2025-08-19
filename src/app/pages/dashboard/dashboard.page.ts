import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-dashboard-page',
  imports: [CommonModule],
  template: `<h1 class="text-2xl font-bold">Dashboard 🏠</h1>`
})
export default class DashboardPage {}
