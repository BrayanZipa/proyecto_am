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
      this.estudiantes = res;
    });
  }

  borrarRegistro(id:any, icontrol:any){
    if (window.confirm("¿Desea eliminar el registro?")) {
      this.crudService.BorrarEmpleado(id).subscribe((res)=>{
        this.estudiantes.splice(icontrol, 1);
      });
    }
  }
}
