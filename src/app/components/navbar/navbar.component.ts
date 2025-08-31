import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import PerfilModalComponent from '../perfil-modal/perfil-modal.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, PerfilModalComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export default class NavbarComponent {
  mostrarPerfil = signal(false);

  togglePerfil() {
    this.mostrarPerfil.update(val => !val);
  }

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
}
