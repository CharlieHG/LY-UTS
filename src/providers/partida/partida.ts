import { Injectable } from "@angular/core";
import { Partida } from "../../models/partida";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentChangeAction,
} from "@angular/fire/firestore";
import { Jugador } from "../../models/jugador";
import { Observable } from "rxjs";
@Injectable()
export class PartidaProvider {
  private path: string = "Partidas";
  prueba:any;
  films;
  constructor(private db: AngularFirestore) {}
  Add(partida: Partida) {
    return this.db
      .collection(this.path)
      .doc(partida.clave.toString())
      .set(partida);
  }
  // AddJugada(partida: Partida) {
  //   return this.db
  //     .collection(this.path)
  //     .doc(partida.clave.toString())
  //     .set(partida);
  // }
  confirm(partida: Partida) {
    return this.db
      .collection(this.path)
      .doc(partida.clave.toString())
      .set(partida);
  }
  getID(partida: Partida) {
    this.prueba = this.db.collection<Partida>(this.path);
    let obj = this.prueba.pipe();
  }

  GetAll(): AngularFirestoreCollection<Partida> {
    return this.db.collection<Partida>(this.path);
  }

  getPrueba(){
    
  }
  Delete(partida: Partida) {
    this.db.collection(this.path).doc(partida.clave.toString()).delete();
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
