import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil-modal.component.html',
  styleUrls: ['./perfil-modal.component.css']
})
export default class PerfilModalComponent {
  @Input() visible = false;
  @Output() cerrar = new EventEmitter();

  usuario = signal({ nombre: '', email: '' });
  passwords = signal({ actual: '', nueva: '' });

  constructor(private usuarioService: UsuarioService) {
    this.cargarPerfil();
  }

  cargarPerfil() {
    this.usuarioService.obtenerPerfil().subscribe({
      next: (perfil) => this.usuario.set(perfil),
      error: () => alert('Error al cargar perfil')
    });
  }

  guardarCambios() {
    this.usuarioService.editarPerfil(this.usuario()).subscribe({
      next: () => alert('Perfil actualizado'),
      error: () => alert('Error al actualizar perfil')
    });
  }

  cambiarPassword() {
    const data = this.passwords();
    if (!data.actual || !data.nueva) return alert('Completa ambos campos');

    this.usuarioService.cambiarPassword(data).subscribe({
      next: () => {
        alert('Contraseña cambiada');
        this.passwords.set({ actual: '', nueva: '' });
      },
      error: () => alert('Error al cambiar contraseña')
    });
  }

  cerrarModal() {
    this.cerrar.emit();
  }
}
