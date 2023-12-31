import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MateriasComponent } from './materias/materias.component';
import { registroComponent } from './registro/registro.component';
import { borrar } from './borrar/borrar.component';

@NgModule({
  declarations: [
    AppComponent,
    MateriasComponent,
    registroComponent,
    borrar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
