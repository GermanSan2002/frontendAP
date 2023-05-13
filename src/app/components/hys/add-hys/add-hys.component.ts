import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hys } from 'src/app/model/hys';
import { HysServiceService } from 'src/app/service/hys-service.service';

@Component({
  selector: 'app-add-hys',
  templateUrl: './add-hys.component.html',
  styleUrls: ['./add-hys.component.css']
})
export class AddHysComponent {
  nombre!: string;
  porcentaje!: number;

  constructor(private HysService: HysServiceService, private router: Router) {

  }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hys = new Hys(this.nombre, this.porcentaje);

    this.HysService.save(hys).subscribe(
      data => {
        alert("Habilidad añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
