import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UltimaPartida } from '../../models/ultpartida';

@Injectable()
export class UltimapartidaProvider {
  ultimapath: string = "UltimaPartida"
  constructor(private db: AngularFirestore) {
  }
  Add(ultima: UltimaPartida){
    return this.db
      .collection(this.ultimapath)
      .doc("Última Partida")
      .set(ultima);
  }
  GetAll(): AngularFirestoreCollection<UltimaPartida> {
    return this.db.collection<UltimaPartida>(this.ultimapath);
  }
}
