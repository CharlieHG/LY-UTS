import { Injectable } from '@angular/core';
import { Partida } from '../../models/partida';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Jugador } from '../../models/jugador';

@Injectable()
export class PartidaProvider {
  private path: string = "Partidas";

  constructor(private db: AngularFirestore) {
  }
  Add(partida: Partida) {
    return this.db
      .collection(this.path)
      .doc(partida.clave.toString())
      .set(partida);
  }
  GetAll(): AngularFirestoreCollection<Partida> {
    return this.db.collection<Partida>(this.path);
  }
  Delete(partida: Partida) {
    this.db
      .collection(this.path)
      .doc(partida.clave.toString())
      .delete();
  }
  DeletePlayer(partida: Partida, jugador: Jugador) {
    let i = partida.jugadores.indexOf(jugador);
    partida.jugadores.splice(i, 1).pop();
    return this.db
      .collection(this.path)
      .doc(partida.clave.toString())
      .set(partida);
  }
}
