import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriasComponent } from './materias/materias.component';
import { registroComponent } from './registro/registro.component';
import { borrar } from './borrar/borrar.component';

// Navegate Ruts
const routes: Routes = [
  {path:'', redirectTo: 'materias', pathMatch: 'full'},
  {path: 'materias', component: MateriasComponent},
  {path: 'nuevoregistro', component: registroComponent},
  {path: 'ventanamodal', component: borrar},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
