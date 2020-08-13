import { Injectable } from '@angular/core';

import { Jugador } from '../../models/jugador';
import { AngularFirestore } from '@angular/fire/firestore';

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
  Delete(jugador: Jugador) {
    this.db
      .collection(this.path)
      .doc(jugador.nombre)
      .delete();
  }
}
