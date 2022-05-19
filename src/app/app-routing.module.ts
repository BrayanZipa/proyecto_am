import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditosComponent } from './components/creditos/creditos.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'ingresar', component: IngresarComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'creditos', component: CreditosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
