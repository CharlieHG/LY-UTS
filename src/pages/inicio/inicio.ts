import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ConfigPage } from '../config/config';
import { CrearPartidaPage } from '../crear-partida/crear-partida';
import { UnirsePartidaPage } from '../unirse-partida/unirse-partida';
import { PuntuacionPage } from '../puntuacion/puntuacion';
import { UltimapartidaProvider } from '../../providers/ultimapartida/ultimapartida';
import { UltimaPartida } from '../../models/ultpartida';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  audio: any;
  audio2: any;
  silencio:boolean= false;
  private ultima: UltimaPartida;
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
    "Has volteado a Awakaato más de" +
    " 20 veces";

  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private ultProvider: UltimapartidaProvider) {
      // this.AudioFondo();
  }

  // ngOnInit() {
  //   this.audio = new Audio();
  //   this.audio.src = 'assets/audios/1.mp3';
  //   this.audio.load();
  //   this.audio.play();
  // }
  
  // AudioFondo() {
  //   this.audio = new Audio();
  //   this.audio.src = 'assets/audios/FondoSog.mp3';
  //   this.audio.load();
  //   this.audio.play();
  // }
  AudioBotones() {
    this.audio = new Audio();
    this.audio.src = 'assets/audios/Botones.mp3';
    this.audio.load();
    this.audio.play();
  }
  
  cambiarImg() {
    this.audio2 = new Audio();
    this.audio2.src = 'assets/audios/Inicio.wav';
    this.audio2.load();
    this.audio2.play();
  }
  btnConfig() {//Pushear la pagina de configuración
    this.AudioBotones();
    this.navCtrl.push(ConfigPage);
  }
  btnCrearPartida() {//Pushear la pagina de Crear partida
    this.AudioBotones();
    this.navCtrl.push(CrearPartidaPage);
  }
  btnUnirsePartida() {//Pushear la pagina de Unirse a partida
    this.AudioBotones();
    this.navCtrl.push(UnirsePartidaPage);
  }
  btnPuntuacion() {
    this.AudioBotones();
    this.ultProvider
      .GetAll()
      .snapshotChanges()
      .subscribe(partidas => {
        partidas.forEach(ultima => {
          this.ultima = ultima.payload.doc.data();
        });
        this.navCtrl.push(PuntuacionPage, this.ultima);
      });
  }
  silenciar(){
    this.audio.src = 'assets/audios/Botones.mp3';
    this.audio.load();
    this.audio.play();
  }
  btnAyuda() {//Llamar alerta de ayuda
    this.AudioBotones();
    let alert = this.alertCtrl.create({
      title: 'Ayuda',
      subTitle: this.ayuda,
      buttons: ['Entendido'],
    });
    alert.present();
  }
  punto: number = 0;
  easterEgg() {//Llamar easter egg
    this.punto++;
    if (this.punto >= 20) {
      let alert = this.alertCtrl.create({
        title: '¡Enhorabuena!',
        subTitle: this.awakaato,
        buttons: ['Aceptar'],
      });
      alert.present();
      this.punto = 0;
    }
  }
}
