import { Injectable } from '@angular/core';
import { Libro } from '../model/libro';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


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

    const refLibro = this.afs.collection("libros");
    if (libro.stock = 0){
      

    }else{
      libro.stock = libro.stock - 1;
      
    }
    /*refLibro.doc(Libro.name).set(Object.assign({}, Libro), { merge: true})*/

  }

}
