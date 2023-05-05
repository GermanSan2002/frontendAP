import { Component } from '@angular/core';
import { Estudio } from 'src/app/model/estudio';
import { SEstudioService } from '../../../service/s-estudio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-est',
  templateUrl: './edit-est.component.html',
  styleUrls: ['./edit-est.component.css']
})
export class EditEstComponent {
  estLab!: Estudio;

  constructor(private SEstudio: SEstudioService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.SEstudio.detail(id).subscribe(
      data => {
        this.estLab = data;
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.SEstudio.update(id, this.estLab).subscribe(
      data => {
        alert("Experiencia modificada");
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }
}
