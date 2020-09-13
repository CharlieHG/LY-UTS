import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
} from "ionic-angular";
import { UltimaPartida } from "../../models/ultpartida";
import { PartidaPage } from "../partida/partida";
import { Partida } from "../../models/partida";

@IonicPage()
@Component({
  selector: "page-puntuacion",
  templateUrl: "puntuacion.html",
})
export class PuntuacionPage {
  public partida= [];
  public chorro;
  public cuatroEsquinas;
  public centro;
  public buena;

  private noPuntuacion: string =
    "¡Qué lástima! No hay partidas " + "suficientes para mostrar";

  constructor(
    public navCtrl: NavController,
    partida: PartidaPage,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    this.partida = navParams.get("partidaJugadas");
  }

  volver() {
    this.navCtrl.pop();
  }
}
