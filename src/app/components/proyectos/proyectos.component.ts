import { Component } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proy: Proyecto[] = [];

  constructor(private proyService: ProyectoService, private tokenService: TokenService) { }

  isLogged = false;
  isAdmin = false;
  vacio = true;

  ngOnInit(): void {
    this.cargarProy();
    this.vacio = (this.proy.length == 0);
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

  cargarProy(): void {
    this.proyService.lista().subscribe(
      data => {
        this.proy = data;
      }
    )
  }

  borrarProy(id?: number) {
    if (id != undefined) {
      this.proyService.delete(id).subscribe(
        data => {
          alert("Experiencia borrada");
          this.cargarProy();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
