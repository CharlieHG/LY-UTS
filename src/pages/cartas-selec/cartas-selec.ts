import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Slides,
  AlertController,
} from "ionic-angular";
import { InicioPage } from "../inicio/inicio";
import { Carta } from "../../models/carta";
import { CartaGrande } from "../../models/cartaGrande";
import { CrearPartidaPage } from "../crear-partida/crear-partida";
import { UnirsePartidaPage } from "../unirse-partida/unirse-partida";

/**
 * Generated class for the CartasSelecPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-cartas-selec",
  templateUrl: "cartas-selec.html",
})
export class CartasSelecPage {
  @ViewChild(Slides) slides: Slides;
  public claseCarta: boolean = false;
  public cartaMarcada: boolean = false;
  public carta: CartaGrande;
  public cartas: CartaGrande[] = [];
  public pantalla;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {
    this.pantalla = navParams.get("pantalla");
    this.cartas.push(
      { idCarta: 1, imgPath: 1, textColor: "red.disabled" },
      { idCarta: 2, imgPath: 2, textColor: "red.disabled" },
      { idCarta: 3, imgPath: 3, textColor: "red.disabled" },
      { idCarta: 4, imgPath: 4, textColor: "red.disabled" },
      { idCarta: 5, imgPath: 5, textColor: "red.disabled" },
      { idCarta: 6, imgPath: 6, textColor: "red.disabled" },
      { idCarta: 7, imgPath: 7, textColor: "red.disabled" },
      { idCarta: 8, imgPath: 8, textColor: "red.disabled" },
      { idCarta: 9, imgPath: 9, textColor: "red.disabled" },
      { idCarta: 10, imgPath: 10, textColor: "red.disabled" },
      { idCarta: 11, imgPath: 11, textColor: "red.disabled" },
      { idCarta: 12, imgPath: 12, textColor: "red.disabled" }
    );
  }

  ionViewDidLoad() {}
  confirm() {
    if (this.pantalla == "crear") {
      let carta = this.carta;
      if (carta != undefined) {
        this.navCtrl.setRoot(CrearPartidaPage, { cartaGrande: carta.idCarta });
        console.log(carta);
      } else {
        this.alertCtrl
          .create({
            title: "¡Aun no seleccionas una carta!",
            buttons: ["Aceptar"],
          })
          .present();
      }
    } else {
      let carta = this.carta;
      if (carta != undefined) {
        this.navCtrl.setRoot(UnirsePartidaPage, { cartaGrande: carta.idCarta });
        console.log(carta);
      } else {
        this.alertCtrl
          .create({
            title: "¡Aun no seleccionas una carta!",
            buttons: ["Aceptar"],
          })
          .present();
      }
    }
  }

  cartaSelec(carta: CartaGrande) {
    for (let lastCarta of this.cartas) {
      if (lastCarta.textColor == "red") {
        this.cartaMarcada = true;
        console.log(lastCarta);
        lastCarta.textColor = "red.disabled";
      }
    }
    this.claseCarta = !this.claseCarta;
    if (this.claseCarta == true) {
      carta.textColor = "red";
      this.carta = carta;
      this.cartaMarcada = true;
    }
    if (this.claseCarta == false) {
      carta.textColor = "red.disabled";
      this.cartaMarcada = false;
      this.carta = null;
    }
  }
  volver() {
    this.navCtrl.setRoot(InicioPage);
  }
}
