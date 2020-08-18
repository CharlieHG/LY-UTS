import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Carta } from '../../models/carta';

@Injectable()
export class CartaProvider {
  private path: string = "Cartas";
  public ImageArray: any[] = [];

  constructor(private db: AngularFirestore) { }
  Add(carta: Carta) {
    return this.db
      .collection(this.path)
      .doc(carta.idCarta.toString())
      .set(carta);
  }
  SetCardsArray() {
    for (let i = 1; i <= 54; i++)
      this.ImageArray.push(i);
    this.ImageArray = this.Shuffle(this.ImageArray);
    return this.ImageArray;
  }
  Shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
    return array;
  }
  async GetCards() {
    let array = []
    await this.db
      .collection<Carta>(this.path)
      .valueChanges()
      .subscribe(cartas => {
        array = cartas;
      });
    return array;
  }
}
