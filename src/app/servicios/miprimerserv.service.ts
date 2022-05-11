import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiprimerservService {

  constructor() { }
  obtenerDatos(){
    console.log("el servicio esta corriendo");
  }
}
