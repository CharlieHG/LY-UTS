import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {
  saturation: number = 0;
  audio: any;
  sausage:boolean=false;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  AudioBotones() {
    this.audio = new Audio();
    this.audio.src = 'assets/audios/Botones.mp3';
    this.audio.load();
    this.audio.play();
  }
  toggle(){
    this.sausage = !this.sausage
    console.log(this.sausage);
  }
  volver() {
    this.AudioBotones();
    this.navCtrl.pop();
  }
}
