import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrearEditarCuponComponent } from "./components/crear-editar-cupon/crear-editar-cupon.component";
import { ListadoCuponesComponent } from "./components/listado-cupones/listado-cupones.component";
import { VerCuponComponent } from "./components/ver-cupon/ver-cupon.component";

const routes: Routes = [
    { path: '', redirectTo: '/listadoCupones', pathMatch: 'full'},
    { path: 'listadoCupones', component: ListadoCuponesComponent },
    { path: 'crearCupon', component: CrearEditarCuponComponent },
    { path: 'editarCupon/:K_Descuento', component: CrearEditarCuponComponent },
    { path: 'verCupon/:K_Descuento', component: VerCuponComponent },
    { path: '**', redirectTo: '/listadoCupones', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }