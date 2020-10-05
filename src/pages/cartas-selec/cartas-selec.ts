import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Slides,
  AlertController,
} from "ionic-angular";
import { InicioPage } from "../inicio/inicio";
import { CartaGrande } from "../../models/cartaGrande";
import { CrearPartidaPage } from "../crear-partida/crear-partida";
import { UnirsePartidaPage } from "../unirse-partida/unirse-partida";
import { PartidaProvider } from "../../providers/partida/partida";

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
      { idCarta: 1, imgPath: "https://i.ibb.co/L1KJnG1/1.png", textColor: "red.disabled" },
      { idCarta: 2, imgPath: "https://i.ibb.co/zm25JWx/2.png", textColor: "red.disabled" },
      { idCarta: 3, imgPath: "https://i.ibb.co/Hgghrkw/3.png", textColor: "red.disabled" },
      { idCarta: 4, imgPath: "https://i.ibb.co/Sr9g8Fm/4.png", textColor: "red.disabled" },
      { idCarta: 5, imgPath: "https://i.ibb.co/MZhnCkq/5.png", textColor: "red.disabled" },
      { idCarta: 6, imgPath: "https://i.ibb.co/PNJfRhG/6.png", textColor: "red.disabled" },
      { idCarta: 7, imgPath: "https://i.ibb.co/9phxckb/7.png", textColor: "red.disabled" },
      { idCarta: 8, imgPath: "https://i.ibb.co/L9rvW0T/8.png", textColor: "red.disabled" },
      { idCarta: 9, imgPath: "https://i.ibb.co/tmPVqXL/9.png", textColor: "red.disabled" },
      { idCarta: 10, imgPath: "https://i.ibb.co/x20vsFX/10.png", textColor: "red.disabled" },
      { idCarta: 11, imgPath: "https://i.ibb.co/K0dkrQD/11.png", textColor: "red.disabled" },
      { idCarta: 12, imgPath: "https://i.ibb.co/jTV3JYF/12.png", textColor: "red.disabled" }
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
