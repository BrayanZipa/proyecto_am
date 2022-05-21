import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Admin} from './Admin';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // API: string='http://localhost/AngularPF/'
  API: string='http://localhost/desarrolloWeb/angular/'
  constructor(private clienteHttp: HttpClient) { 
  }  

  Registrar(datosEstudiante:Admin):Observable<any> {
    return this.clienteHttp.post(this.API+"?insertar=1",datosEstudiante);
  }
}
