import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../Services/tareas.service';
import { Tarea } from '../../tarea.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mostrar-detalle',
  templateUrl: './mostrar-detalle.component.html',
  styleUrls: ['./mostrar-detalle.component.css']
})
export class MostrarDetalleComponent implements OnInit {
  tareaSeleccionada: Tarea | null = null;

  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {
    this.tareaService.obtenerTareaSeleccionada().subscribe(tarea => {
      this.tareaSeleccionada = tarea;
    });
  }
}
