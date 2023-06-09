import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { ImagenService } from '../../service/imagen.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona!: persona;

  constructor(public pesonaService: PersonaService, private activatedRouter: ActivatedRoute,
    private router: Router, public imagenService: ImagenService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.pesonaService.detail(id).subscribe(
      (data: persona) => {
        this.persona = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imagenService.url;

    this.pesonaService.update(id, this.persona).subscribe(
      (data: persona) => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "Perfil_" + id;
    this.imagenService.uploadImage($event, name);
  }
}
