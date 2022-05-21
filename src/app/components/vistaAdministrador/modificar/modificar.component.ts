import { Component, OnInit } from '@angular/core';
import{CrudService} from 'src/app/Servicio/crud.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  estudiantes:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.MostrarEstudiantes().subscribe(res=>{
      console.log(res);
      this.estudiantes = res;
    });
  }

}
