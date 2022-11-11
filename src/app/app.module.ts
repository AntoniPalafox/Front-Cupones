import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from '@angular/router';
import { CrearEditarCuponComponent } from './components/crear-editar-cupon/crear-editar-cupon.component';
import { ListadoCuponesComponent } from './components/listado-cupones/listado-cupones.component';
import { VerCuponComponent } from './components/ver-cupon/ver-cupon.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    CrearEditarCuponComponent,
    ListadoCuponesComponent,
    VerCuponComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
