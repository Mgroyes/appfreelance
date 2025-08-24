import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import ClienteFormComponent from '../../components/cliente-form/cliente-form/cliente-form.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ClienteFormComponent],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css']
})
export default class DashboardPage {
  // ✅ Signal que se pasa al cliente-form
  clienteSeleccionado = signal({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    estado: ''
  });

  guardarCliente(cliente: any) {
    console.log('📝 Guardar cliente:', cliente);
    // Aquí podrías hacer POST o PUT al backend
  }

  cancelarEdicion() {
    console.log('⛔ Edición cancelada');
    // Ejemplo: resetear signal a objeto vacío
    this.clienteSeleccionado.set({
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      estado: ''
    });
  }
}
