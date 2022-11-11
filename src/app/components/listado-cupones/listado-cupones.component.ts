import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cupon } from 'src/app/interfaces/cupon';

const listadoCupones: Cupon[] = [
  {D_Descuento: "Cupón random", D_Cupon: 'NUEVOCUPON', K_Tipo_Promocion: 1},
  {D_Descuento: "Cupón de ultimo momento", D_Cupon: 'ULTIMOCUPO', K_Tipo_Promocion: 1},
  {D_Descuento: "Cupón primera compra", D_Cupon: 'CUPONPRIME', K_Tipo_Promocion: 1},
  {D_Descuento: "Cupón random repetido", D_Cupon: 'REPETIDOTE', K_Tipo_Promocion: 1},
  {D_Descuento: "Cupón random repetido", D_Cupon: 'REPETIDOTE', K_Tipo_Promocion: 1},
  {D_Descuento: "Cupón random repetido", D_Cupon: 'REPETIDOTE', K_Tipo_Promocion: 1},
  {D_Descuento: "Cupón random repetido", D_Cupon: 'REPETIDOTE', K_Tipo_Promocion: 1},
  {D_Descuento: "Cupón random repetido", D_Cupon: 'REPETIDOTE', K_Tipo_Promocion: 1},
  {D_Descuento: "Cupón random repetido", D_Cupon: 'REPETIDOTE', K_Tipo_Promocion: 1},
  {D_Descuento: "Cupón random repetido", D_Cupon: 'REPETIDOTE', K_Tipo_Promocion: 1},
  {D_Descuento: "Cupón random repetido", D_Cupon: 'REPETIDOTE', K_Tipo_Promocion: 1},
  {D_Descuento: "Cupón random repetido", D_Cupon: 'REPETIDOTE', K_Tipo_Promocion: 1},
  {D_Descuento: "Cupón random repetido", D_Cupon: 'REPETIDOTE', K_Tipo_Promocion: 1},
  {D_Descuento: "Cupón random repetido", D_Cupon: 'REPETIDOTE', K_Tipo_Promocion: 1},
  {D_Descuento: "Cupón random repetido", D_Cupon: 'REPETIDOTE', K_Tipo_Promocion: 1},
  {D_Descuento: "Cupón random repetido", D_Cupon: 'REPETIDOTE', K_Tipo_Promocion: 1},
  {D_Descuento: "Cupón random repetido", D_Cupon: 'REPETIDOTE', K_Tipo_Promocion: 1},
  {D_Descuento: "Cupón random repetido", D_Cupon: 'REPETIDOTE', K_Tipo_Promocion: 1},
  {D_Descuento: "Cupón random repetido", D_Cupon: 'REPETIDOTE', K_Tipo_Promocion: 1},
];



@Component({
  selector: 'app-listado-cupones',
  templateUrl: './listado-cupones.component.html',
  styleUrls: ['./listado-cupones.component.css']
})
export class ListadoCuponesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['Descuento', 'Cupon', 'Tipo promocion', 'Acciones'];
  dataSource = new MatTableDataSource<Cupon>(listadoCupones);

  
  constructor() { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.firstPageLabel = "Ir a la primer página";
    this.paginator._intl.lastPageLabel = "Ir a la última página";
    this.paginator._intl.nextPageLabel = "Ir a la página siguiente";
    this.paginator._intl.previousPageLabel = "Ir a la página anterior";
    this.paginator._intl.itemsPerPageLabel = "Cupones por página";
    this.dataSource.sort = this.sort;
  }


  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
  }

}
