import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { EXPyESTComponent } from './components/expy-est/expy-est.component';
import { HardSoftSkillsComponent } from './components/hard-soft-skills/hard-soft-skills.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

import { interceptorProvider } from './service/interceptor-service';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditExperienciaComponent } from './components/experiencias/edit-experiencia/edit-experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencias/nueva-experiencia/nueva-experiencia.component';
import { AgregarEstComponent } from './components/estudios/agregar-est/agregar-est.component';
import { EditEstComponent } from './components/estudios/edit-est/edit-est.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AddHysComponent } from './components/hys/add-hys/add-hys.component';
import { EditHysComponent } from './components/hys/edit-hys/edit-hys.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto/new-proyecto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    RedesSocialesComponent,
    AcercaDeComponent,
    BannerComponent,
    ExperienciasComponent,
    EstudiosComponent,
    EXPyESTComponent,
    HardSoftSkillsComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    EditAcercaDeComponent,
    EditExperienciaComponent,
    NuevaExperienciaComponent,
    AgregarEstComponent,
    EditEstComponent,
    AddHysComponent,
    EditHysComponent,
    NewProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
