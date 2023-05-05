import { Component } from '@angular/core';
import { Experiencia } from '../../model/experiencia';
import { SexperienciaService } from '../../service/sexperiencia.service';
import { TokenService } from 'src/app/service/token.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent {
  experiencias: Experiencia[] = [];

  constructor(private sExperiencia: SexperienciaService, private tokenService: TokenService) { }

  isLogged = false;
  isAdmin = false;
  vacio = true;

  ngOnInit(): void {
    this.cargarExperiencia();
    this.vacio = (this.experiencias.length == 0);
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      if (this.tokenService.getAuthorities().includes('ROLE_ADMIN')) {
        this.isAdmin = true
      } else {
        false
      }
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(
      data => {
        this.experiencias = data;
      }
    )
  }

  borrarExp(id?: number) {
    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe(
        data => {
          alert("Experiencia borrada");
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
