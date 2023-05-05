import { Component } from '@angular/core';
import { Estudio } from 'src/app/model/estudio';
import { SEstudioService } from 'src/app/service/s-estudio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent {
  estudios: Estudio[] = [];

  constructor(private sEstudio: SEstudioService, private tokenService: TokenService) { }

  isLogged = false;
  isAdmin = false;
  vacio = true;

  ngOnInit(): void {
    this.cargarEstudios();
    this.vacio = (this.estudios.length == 0);
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

  cargarEstudios(): void {
    this.sEstudio.lista().subscribe(
      data => {
        this.estudios = data;
      }
    )
  }

  borrarEst(id?: number) {
    if (id != undefined) {
      this.sEstudio.delete(id).subscribe(
        data => {
          alert("Estudio borrado");
          this.cargarEstudios();
        }, err => {
          alert("No se pudo borrar el estudio");
        }
      )
    }
  }
}
