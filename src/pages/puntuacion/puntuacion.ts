import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UltimaPartida } from '../../models/ultpartida';

@IonicPage()
@Component({
  selector: 'page-puntuacion',
  templateUrl: 'puntuacion.html',
})
export class PuntuacionPage {
  audio: any;
  ultpartida: UltimaPartida;
  clavePartida: number;
  jGanador: string;
  Total: number;
  Tiempo: number;
  Chorro: number;
  Centro: number;
  Esquinas4: number;
  Buena: number
  private noPuntuacion: string =
    "¡Qué lástima! No hay partidas " +
    "suficientes para mostrar";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    try {
      
    } catch (error) {
      
    }
    try {
      this.ultpartida = navParams.data;
      this.Total = this.ultpartida.jGanador.puntos;
      this.clavePartida = this.ultpartida.clavePartida;
      this.jGanador = this.ultpartida.jGanador.nombre;
      this.Tiempo = this.ultpartida.tiempo;
      this.Chorro = this.ultpartida.chorro
      this.Centro = this.ultpartida.centro
      this.Esquinas4 = this.ultpartida.esq4
      this.Buena = this.ultpartida.buena
    } 
    catch {
      let alert = this.alertCtrl.create({
        title: 'No existen datos de la última partida',
        subTitle: this.noPuntuacion,
        buttons: ['Entendido']
      });
      alert.present();
      this.jGanador = "Nadie";
      this.Total = 0;
      this.Tiempo = 0;
      this.clavePartida = 0;
      this.Chorro = 0;
      this.Centro = 0;
      this.Esquinas4 = 0;
      this.Buena = 0;
    }
  }
  AudioBotones() {
    this.audio = new Audio();
    this.audio.src = 'assets/audios/Botones.mp3';
    this.audio.load();
    this.audio.play();
  }
  volver() {
    this.AudioBotones();
    this.navCtrl.pop();
  }
}
