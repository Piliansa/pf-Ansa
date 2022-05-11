import { Component, OnInit } from '@angular/core';
import { MiprimerservService } from 'src/app/servicios/miprimerserv.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private obtenerDatos: MiprimerservService) { }

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos();
  }

}
