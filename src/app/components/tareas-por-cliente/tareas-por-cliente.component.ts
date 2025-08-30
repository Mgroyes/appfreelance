import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareaService } from '../../services/tarea.service'; // Asegúrate de que la ruta es correcta

@Component({
  selector: 'app-tareas-por-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tareas-por-cliente.component.html',
  styleUrls: ['./tareas-por-cliente.component.scss']
})
export class TareasPorClienteComponent implements OnInit {
  @Input() clienteId!: number;

  descripcion: string = '';
  fecha: string = '';
  tareas: any[] = [];

  constructor(private tareaService: TareaService) {}

  ngOnInit() {
    this.cargarTareas();
  }

  cargarTareas() {
    if (!this.clienteId) return;

    this.tareaService.getTareas(this.clienteId).subscribe({
      next: (data) => this.tareas = data,
      error: () => alert('Error al cargar tareas')
    });
  }

  agregarTarea() {
    if (!this.descripcion) return;

    const nuevaTarea = {
      descripcion: this.descripcion,
      fecha: this.fecha || new Date().toISOString().split('T')[0],
      completado: false
    };

    this.tareaService.crearTarea(this.clienteId, nuevaTarea).subscribe({
      next: (tareaCreada) => {
        this.tareas.push(tareaCreada);
        this.descripcion = '';
        this.fecha = '';
      },
      error: () => alert('Error al agregar tarea')
    });
  }

  eliminarTarea(id: number) {
    this.tareaService.eliminarTarea(this.clienteId, id).subscribe({
      next: () => {
        this.tareas = this.tareas.filter(t => t.id !== id);
      },
      error: () => alert('Error al eliminar tarea')
    });
  }

  toggleCompletado(tarea: any) {
    const tareaActualizada = { ...tarea, completado: !tarea.completado };

    this.tareaService.actualizarTarea(this.clienteId, tarea.id, tareaActualizada).subscribe({
      next: () => tarea.completado = !tarea.completado,
      error: () => alert('Error al actualizar tarea')
    });
  }
}
