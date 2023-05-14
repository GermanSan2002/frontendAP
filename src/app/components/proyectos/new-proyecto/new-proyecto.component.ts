import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent {
  nombre!: string;
  descripcion!: string;
  linkDemo!: string;
  linkCode!: string;

  constructor(private sProyecto: ProyectoService, private router: Router) { }

  onCreate(): void {
    const proy = new Proyecto(this.nombre, this.descripcion, this.linkDemo, this.linkCode);

    this.sProyecto.save(proy).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}