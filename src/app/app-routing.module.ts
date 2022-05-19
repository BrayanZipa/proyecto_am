import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditosComponent } from './components/creditos/creditos.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { EliminarComponent } from './components/vistaAdministrador/eliminar/eliminar.component';
import { ModificarComponent } from './components/vistaAdministrador/modificar/modificar.component';
import { RegistrarComponent } from './components/vistaAdministrador/registrar/registrar.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'ingresar', component: IngresarComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'creditos', component: CreditosComponent},

  {path: 'admin/ingresar', component: RegistrarComponent},
  {path: 'admin/modificar', component: ModificarComponent},
  {path: 'admin/eliminar', component: EliminarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
