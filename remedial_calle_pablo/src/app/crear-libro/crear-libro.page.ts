import { Component, OnInit } from '@angular/core';
import { Libro } from '../model/libro';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.page.html',
  styleUrls: ['./crear-libro.page.scss'],
})
export class CrearLibroPage implements OnInit {

  libro: Libro = new Libro();

  constructor(public librosService: LibrosService) { }

  ngOnInit() {
  }

  guardarLibro(){

    console.log(this.libro);

    this.librosService.saveLibro(this.libro);

    
  }

}
