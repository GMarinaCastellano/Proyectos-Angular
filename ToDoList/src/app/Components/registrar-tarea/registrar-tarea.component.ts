import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TareaService } from '../../Services/tareas.service';
import { Tarea } from '../../tarea.model';

@Component({
  selector: 'app-registrar-tarea',
  templateUrl: './registrar-tarea.component.html',
  styleUrls: ['./registrar-tarea.component.css']
})
export class RegistrarTareaComponent {
  tarea: Tarea = {
    nombre: '',
    prioridad: 'media', 
    descripcion: ''
  };

  constructor(private tareaService: TareaService) {}

  onSubmit(): void {
    if (this.tarea.nombre && this.tarea.prioridad && this.tarea.descripcion) {
      this.tareaService.agregarTarea(this.tarea);
      this.tarea = {
        nombre: '',
        prioridad: 'media',
        descripcion: ''
      };
    }
  }
}
