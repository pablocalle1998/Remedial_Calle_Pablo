import { Injectable } from '@angular/core';
import { Libro } from '../model/libro';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';


@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(public afs: AngularFirestore) { }


  saveLibro(libro : Libro){

    const refLibro = this.afs.collection("libros");
    if(libro.uid==null){
      libro.uid = this.afs.createId();
    } 
    refLibro.doc(libro.uid).set(Object.assign({}, libro), {merge: true})
  }


  getLibros(): Observable<any[]>{

    return this.afs.collection("libros").valueChanges();
  }

  reserva(libro : Libro){

    var stock:number = libro.stock;

    
    /*const refLibro = this.afs.collection("libros");*/
    if (stock = 0){
      var mensaje:string = "Stock Agotado";
      console.log(mensaje);

    }else{
      stock = stock - 1;
      
    }
  

  }
  

}
