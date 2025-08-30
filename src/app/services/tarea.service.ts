import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TareaService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/clientes`;

  getTareas(clienteId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${clienteId}/tareas`);
  }

  crearTarea(clienteId: number, tarea: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${clienteId}/tareas`, tarea);
  }

  actualizarTarea(clienteId: number, tareaId: number, tarea: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${clienteId}/tareas/${tareaId}`, tarea);
  }

  eliminarTarea(clienteId: number, tareaId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${clienteId}/tareas/${tareaId}`);
  }
}
