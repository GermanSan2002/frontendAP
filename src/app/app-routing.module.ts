import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditExperienciaComponent } from './components/experiencias/edit-experiencia/edit-experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencias/nueva-experiencia/nueva-experiencia.component';
import { AgregarEstComponent } from './components/estudios/agregar-est/agregar-est.component';
import { EditEstComponent } from './components/estudios/edit-est/edit-est.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'editAcercaDe/:id', component: EditAcercaDeComponent },
  { path: 'editExp/:id', component: EditExperienciaComponent },
  { path: 'nuevaExp', component: NuevaExperienciaComponent },
  { path: 'nuevoEst', component: AgregarEstComponent },
  { path: 'editEst/:id', component: EditEstComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
