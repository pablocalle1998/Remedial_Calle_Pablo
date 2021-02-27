import { Injectable } from '@angular/core';
import { Animal } from '../model/animal';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  constructor(public afs: AngularFirestore) { }


  saveAnimal(animal : Animal){

    const refAnimal = this.afs.collection("animales");

    if(animal.uid==null){
      animal.uid = this.afs.createId();
    } 

    refAnimal.doc(animal.uid).set(Object.assign({}, animal), {merge: true})


  }


  getAnimales(): Observable<any[]>{

    return this.afs.collection("animales").valueChanges();
  }
}
