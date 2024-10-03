import { Injectable } from '@angular/core';
import { Tarea } from '../tarea.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private tareas: Tarea[] = [];
  private tareaSeleccionada = new BehaviorSubject<Tarea | null>(null);

  constructor() { }

  agregarTarea(tarea: Tarea): void {
    this.tareas.push(tarea);
  }

  obtenerTareas(): Tarea[] {
    return this.tareas;
  }

  seleccionarTarea(tarea: Tarea): void {
    this.tareaSeleccionada.next(tarea);
  }

  obtenerTareaSeleccionada(): Observable<Tarea | null> {
    return this.tareaSeleccionada.asObservable();
  }
}
