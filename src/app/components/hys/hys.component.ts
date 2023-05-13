import { Component } from '@angular/core';
import { Hys } from 'src/app/model/hys';
import { HysServiceService } from 'src/app/service/hys-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent {
  hys: Hys[] = [];

  constructor(private HysService: HysServiceService, private tokenService: TokenService) { }

  isLogged = false;
  isAdmin = false;
  vacio = true;

  ngOnInit(): void {
    this.cargarHys();
    this.vacio = (this.hys.length == 0);
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

  cargarHys(): void {
    this.HysService.lista().subscribe(
      data => {
        this.hys = data;
      }
    )
  }

  borrarHys(id?: number) {
    if (id != undefined) {
      this.HysService.delete(id).subscribe(
        data => {
          alert("Experiencia borrada");
          this.cargarHys();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
