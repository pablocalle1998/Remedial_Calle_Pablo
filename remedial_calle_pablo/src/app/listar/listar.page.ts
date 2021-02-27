import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LibrosService } from '../services/libros.service';
import { Libro } from  '../model/libro'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  libros: Observable<any[]>;

  constructor(public librosService: LibrosService) { }
  libro: Libro = new Libro();

  ngOnInit() {

    this.libros = this.librosService.getLibros();
    console.log("ESTO RECIBE", this.libros);
  }

  reserva() {
    this.librosService.reserva(this.libro);
    this.libro= new Libro();
   
    }

  

}
