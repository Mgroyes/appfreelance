import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-not-found-page',
  imports: [CommonModule],
  template: `<h1 class="text-red-500 text-2xl font-bold">404 - Página no encontrada</h1>`
})
export default class NotFoundPage {}
