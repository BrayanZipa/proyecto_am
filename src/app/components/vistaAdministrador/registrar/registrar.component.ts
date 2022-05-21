import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import{CrudService} from 'src/app/Servicio/crud.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  formularioadmin:FormGroup;

  constructor(public formulario:FormBuilder,
    private crudService:CrudService
    ) {

    this.formularioadmin = this.formulario.group({
      nombres:[''],
      apellidos:[''],
      sexo:[''],
      tipoDocumento:[''],
      edad:[''],
      numeroDocumento:[''],
      direccion:[''],
      telefono:[''],
      correo:[''],
      carrera:[''],
      jornada:['']
    })

   }

  ngOnInit(): void {
  }
  
  enviardatos():any{
    console.log("Me presionaste");
    console.log(this.formularioadmin.value);
    this.crudService.agregarEstudiante(this.formularioadmin.value).subscribe();
  }

}
