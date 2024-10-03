import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../Services/tareas.service';
import { Tarea } from '../../tarea.model';

@Component({
  selector: 'app-listar-tareas',
  templateUrl: './listar-tareas.component.html',
  styleUrls: ['./listar-tareas.component.css']
})
export class ListarTareasComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {
    this.tareas = this.tareaService.obtenerTareas();
  }

  seleccionarTarea(tarea: Tarea): void {
    this.tareaService.seleccionarTarea(tarea);
  }
}
