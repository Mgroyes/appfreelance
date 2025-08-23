// app-freelancers/src/app/services/cliente.service.ts
import { inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class ClienteService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/clientes`;

  private getHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  obtenerClientes() {
    return this.http.get(this.apiUrl, { headers: this.getHeaders() });
  }

  crearCliente(cliente: any) {
    return this.http.post(this.apiUrl, cliente, { headers: this.getHeaders() });
  }

  actualizarCliente(id: number, cliente: any) {
    return this.http.put(`${this.apiUrl}/${id}`, cliente, { headers: this.getHeaders() });
  }

  eliminarCliente(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
