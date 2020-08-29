import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
} from "ionic-angular";
import { Jugador } from "../../models/jugador";
import { PartidaPage } from "../partida/partida";
import { JugadorProvider } from "../../providers/jugador/jugador";
import { PartidaProvider } from "../../providers/partida/partida";
import { Partida } from "../../models/partida";
import { Carta } from "../../models/carta";
import { CartaProvider } from "../../providers/carta/carta";
import { Jugadas } from "../../models/jugadas";
import { InicioPage } from "../inicio/inicio";

@IonicPage()
@Component({
  selector: "page-crear-partida",
  templateUrl: "crear-partida.html",
})
export class CrearPartidaPage {
  public cartaGrande;
  audio: any;
  jugador: Jugador;
  partida: Partida;
  alert: boolean = false; //Determina si se activará o no una alerta al usuario
  foundIt: boolean = true; //Determina si encuentra al jugador en el arreglo
  btnConfirm:boolean=false;
  barajas;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private jProvider: JugadorProvider, //Provider del jugador
    private pProvider: PartidaProvider, //Provider de la partida
    private alertCtrl: AlertController,
    private cProvider: CartaProvider
    
  ) {
    this.cartaGrande = navParams.get("cartaGrande");
    this.barajas = cProvider.SetCardsArray();
    this.partida = {
      clave: this.generarId(),
      jugadores: new Array<Jugador>(),
      confirm:false,
      totalJugadores:1,
      barajas:this.barajas,
      jugadas: [{
        buena:0,
        centro:0,
        chorro:0,
        cuatroEsquinas:0
      }]
    };
    this.jugador = {
      clavePartida: this.partida.clave, //Inicializar la clave con el valor identico de la partida
      idJugador: this.generarId(),
      nombre: "",
      puntos: 0,
      rol:1,
      cartaGrande:this.cartaGrande,
    };
  }

  AudioBotones() {
    this.audio = new Audio();
    this.audio.src = "assets/audios/Botones.mp3";
    this.audio.load();
    this.audio.play();
  }

  volver() {
    this.AudioBotones();
    this.navCtrl.setRoot(InicioPage);
  }

  crearPartida() {
    this.AudioBotones();
    if (this.jugador.nombre != "") {
      this.guardar();
      this.partida.jugadores.forEach((x) => {
        //Recorre el arreglo de jugadores para agregar al que no se repita
        if (x.idJugador != this.jugador.idJugador) {
          return (this.foundIt = true);
        } else {
          return (this.foundIt = false);
        }
      });
      if (this.foundIt) {
        //Si no encuentra al jugador repetido lo agrega al arreglo
        this.partida.jugadores.push(this.jugador);
      }
      this.pProvider.Add(this.partida);

      this.navCtrl.push(PartidaPage, {
        partida: this.partida,
        jugador: this.jugador,
      });
    } else {
      this.alert = true;
    }
  }

  generarId() {
    //Genera una id numerica aleatoria de corto rango: 1-1000
    return Math.floor(Math.random() * 1000 + 1);
  }

  guardar() {
    //Guarda al jugador
    this.jProvider
      .Add(this.jugador)
      .then((x) => {
        console.log("Jugador guardado");
        this.alertCtrl
          .create({
            title: "¡Partida creada con éxito!",
            buttons: ["Aceptar"],
          })
          .present();
        return true;
      })
      .catch((x) => {
        console.log("Error: ", x);
        return false;
      });
  }
}
