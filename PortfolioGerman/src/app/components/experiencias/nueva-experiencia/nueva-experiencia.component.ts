import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SexperienciaService } from 'src/app/service/sexperiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent {
  nombreE: String = '';
  empresaE: String = '';
  descripcionE: String = '';
  inicioE: String = '';
  finalE: String = '';

  constructor(private sExperiencia: SexperienciaService, private router: Router) { }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.empresaE, this.descripcionE, this.inicioE, this.finalE);

    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
