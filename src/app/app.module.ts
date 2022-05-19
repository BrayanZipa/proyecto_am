import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { CreditosComponent } from './components/creditos/creditos.component';
import { MenuComponent } from './components/compartidos/menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    IngresarComponent,
    RegistrarseComponent,
    CreditosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
