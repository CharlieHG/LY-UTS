import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicioPage } from './inicio';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@NgModule({
  declarations: [
    InicioPage,
  ],
  imports: [
    IonicPageModule.forChild(InicioPage),
    NativeAudio
  ],
})
export class InicioPageModule {}
