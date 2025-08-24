import { Component, Input, Output, EventEmitter, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export default class ClienteFormComponent {
  @Input({ required: true }) cliente!: Signal<any>;
  @Output() guardar = new EventEmitter();
  @Output() cancelar = new EventEmitter();

  onSubmit() {
    this.guardar.emit(this.cliente());
  }

  onCancel() {
    this.cancelar.emit();
  }
}
