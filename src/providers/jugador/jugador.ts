import { Injectable } from '@angular/core';

import { Jugador } from '../../models/jugador';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable()
export class JugadorProvider {
  private path: string = "Jugadores";

  constructor(private db: AngularFirestore) {
  }
  Add(jugador: Jugador) {
    return this.db
      .collection(this.path)
      .doc(jugador.nombre)
      .set(jugador);
  }
  GetAll(): AngularFirestoreCollection<Jugador> {
    return this.db.collection<Jugador>(this.path);
  }
  Delete(jugador: Jugador) {
    this.db
      .collection(this.path)
      .doc(jugador.nombre)
      .delete();
  }
}
