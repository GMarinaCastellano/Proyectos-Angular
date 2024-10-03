import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarTareaComponent } from './Components/registrar-tarea/registrar-tarea.component';
import { MostrarDetalleComponent } from './Components/mostrar-detalle/mostrar-detalle.component';
import { ListarTareasComponent } from './Components/listar-tareas/listar-tareas.component';
import { FormsModule } from '@angular/forms';  

@NgModule({
  declarations: [
    AppComponent,
    RegistrarTareaComponent,
    MostrarDetalleComponent,
    ListarTareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
