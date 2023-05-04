import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio';
import { SEstudioService } from 'src/app/service/s-estudio.service';

@Component({
  selector: 'app-agregar-est',
  templateUrl: './agregar-est.component.html',
  styleUrls: ['./agregar-est.component.css']
})
export class AgregarEstComponent {
  nombreE: String = '';
  institucionE: String = '';
  descripcionE: String = '';
  inicioE: String = '';
  finalE: String = '';

  constructor(private sEstudio: SEstudioService, private router: Router) { }

  onCreate(): void {
    const est = new Estudio(this.nombreE, this.institucionE, this.descripcionE, this.inicioE, this.finalE);

    this.sEstudio.save(est).subscribe(
      data => {
        alert("Estudio añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
