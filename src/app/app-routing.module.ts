import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditExperienciaComponent } from './components/experiencias/edit-experiencia/edit-experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencias/nueva-experiencia/nueva-experiencia.component';
import { AgregarEstComponent } from './components/estudios/agregar-est/agregar-est.component';
import { EditEstComponent } from './components/estudios/edit-est/edit-est.component';
import { AddHysComponent } from './components/hys/add-hys/add-hys.component';
import { EditHysComponent } from './components/hys/edit-hys/edit-hys.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto/edit-proyecto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'editAcercaDe/:id', component: EditAcercaDeComponent },
  { path: 'editExp/:id', component: EditExperienciaComponent },
  { path: 'nuevaExp', component: NuevaExperienciaComponent },
  { path: 'nuevoEst', component: AgregarEstComponent },
  { path: 'editEst/:id', component: EditEstComponent },
  { path: 'nuevaHab', component: AddHysComponent },
  { path: 'editHys/:id', component: EditHysComponent },
  { path: 'nuevoProy', component: NewProyectoComponent },
  { path: 'editProy/:id', component: EditProyectoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
