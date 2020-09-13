import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  Platform,
} from "ionic-angular";
import { ConfigPage } from "../config/config";
import { CrearPartidaPage } from "../crear-partida/crear-partida";
import { UnirsePartidaPage } from "../unirse-partida/unirse-partida";
import { PuntuacionPage } from "../puntuacion/puntuacion";
import { UltimapartidaProvider } from "../../providers/ultimapartida/ultimapartida";
import { UltimaPartida } from "../../models/ultpartida";
import { CartasSelecPage } from "../cartas-selec/cartas-selec";
import firebase from "firebase";
import { snapshotToArray } from "../../config/firebase";
@IonicPage()
@Component({
  selector: "page-inicio",
  templateUrl: "inicio.html",
})
export class InicioPage {
  public items: any[] = [];
  ref = firebase.database().ref("/name/");
  audio: any;
  audio2: any;
  silencio: boolean = false;
  private ultima: UltimaPartida;
  public hola;
  public newItem;
  inputText: string = "";
  ayuda: string =
    //<     LIMITE DE UNA ALERTA     >
    "________CREAR PARTIDA_______ " +
    "Ingresas tu nombre y darás la " +
    "clave a un amigo para jugar. " +
    "____UNIRSE A UNA PARTIDA____ " +
    "Ingresas tu nombre y la clave " +
    " de un amigo para jugar.";

  private awakaato: string =
    "¡Has descubierto un secreto!  " +
    "Has volteado a la imagen más de" +
    " 20 veces";
  public partida= 232;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private ultProvider: UltimapartidaProvider,
    private platform: Platform
  ) {
  }
  
  addItem(item) {
    if (item != undefined && item != null) {
      this.newItem = this.ref.push();
      this.newItem.set(item);
      this.inputText='';
    }
  }

  prueba() {
    for (let clave of this.items){
      console.log(this.items[clave]);
    }
  }
  GetPrueba() {
    firebase
      .database()
      .ref("/loteria-yaqui/")
      .once("value")
      .then(function (data) {
        console.log(JSON.stringify(data.val()));
      });
  }
  

  cambiarImg() {
    this.audio2 = new Audio();
    this.audio2.src = "assets/audios/Inicio.wav";
    this.audio2.load();
    this.audio2.play();
  }
  btnConfig() {
    this.navCtrl.push(ConfigPage);
  }
  btnCrearPartida() {
    this.navCtrl.push(CartasSelecPage,{pantalla:"crear"});
  }
  btnUnirsePartida() {
    //Pushear la pagina de Unirse a partida
    this.navCtrl.push(CartasSelecPage,{pantalla:"unirse"});
  }
  btnPuntuacion() {
    this.ultProvider
      .GetAll()
      .snapshotChanges()
      .subscribe((partidas) => {
        partidas.forEach((ultima) => {
          this.ultima = ultima.payload.doc.data();
        });
        this.navCtrl.push(PuntuacionPage, this.ultima);
      });
  }

  btnAyuda() {
    //Llamar alerta de ayuda
    let alert = this.alertCtrl.create({
      title: "Ayuda",
      subTitle: this.ayuda,
      buttons: ["Entendido"],
    });
    alert.present();
  }
  punto: number = 0;
  easterEgg() {
    //Llamar easter egg
    this.punto++;
    if (this.punto >= 20) {
      let alert = this.alertCtrl.create({
        title: "¡Enhorabuena!",
        subTitle: this.awakaato,
        buttons: ["Aceptar"],
      });
      alert.present();
      this.punto = 0;
    }
  }
}
