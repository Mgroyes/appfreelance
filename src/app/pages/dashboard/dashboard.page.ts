import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import ClienteFormComponent from '../../components/cliente-form/cliente-form/cliente-form.component';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ClienteFormComponent],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css']
})
export default class DashboardPage implements OnInit {
  private clienteService = inject(ClienteService);

  clientes = signal<any[]>([]);
  clienteSeleccionado = signal({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    estado: ''
  });
  mostrarFormulario = signal(false);

  ngOnInit() {
    this.cargarClientes();
  }

  cargarClientes() {
    this.clienteService.obtenerClientes().subscribe({
      next: (data) => this.clientes.set(data),
      error: () => alert('Error al cargar clientes')
    });
  }

  nuevoCliente() {
    this.clienteSeleccionado.set({
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      estado: 'activo'
    });
    this.mostrarFormulario.set(true);
  }

  guardarCliente(cliente: any) {
  const esEdicion = !!cliente.id;

  const operacion = esEdicion
    ? this.clienteService.actualizarCliente(cliente.id, cliente)
    : this.clienteService.crearCliente(cliente);

  operacion.subscribe({
    next: () => {
      alert(esEdicion ? 'Cliente actualizado correctamente' : 'Cliente registrado correctamente');
      this.mostrarFormulario.set(false);
      this.cargarClientes();
    },
    error: () => {
      alert(esEdicion ? 'Error al actualizar el cliente' : 'Error al registrar el cliente');
    }
  });
}


  editarCliente(cliente: any) {
    this.clienteSeleccionado.set(cliente);
    this.mostrarFormulario.set(true);
  }

  eliminarCliente(id: number) {
    this.clienteService.eliminarCliente(id).subscribe({
      next: () => {
        alert('Cliente eliminado correctamente');
        this.cargarClientes();
      },
      error: () => alert('Error al eliminar cliente')
    });
  }

  cancelarEdicion() {
    this.mostrarFormulario.set(false);
  }
}
