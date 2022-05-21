import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Admin} from './Admin';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string='http://localhost/AngularPF/'
  constructor(private clienteHttp: HttpClient) { 
  }  
  agregarEstudiante(datosEstudiante:Admin):Observable<any> {
  return this.clienteHttp.post(this.API+"?insertar",datosEstudiante);

  }
}
