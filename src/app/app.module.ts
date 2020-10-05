import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { CrearPartidaPage } from '../pages/crear-partida/crear-partida';
import { ConfigPage } from '../pages/config/config';
import { UnirsePartidaPage } from '../pages/unirse-partida/unirse-partida';


import { JugadorProvider } from '../providers/jugador/jugador';
import { AngularFireModule } from '@angular/fire';
import { firebaseConfigs } from '../config/firebase';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlashCardComponent } from '../components/flash-card/flash-card';
import { PartidaProvider } from '../providers/partida/partida';
import { PartidaPage } from '../pages/partida/partida'
import { UltimapartidaProvider } from '../providers/ultimapartida/ultimapartida';
import { IonicAudioModule, WebAudioProvider, defaultAudioProviderFactory, CordovaMediaProvider } from 'ionic-audio';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { CartaProvider } from '../providers/carta/carta';
import { CartasSelecPage } from '../pages/cartas-selec/cartas-selec';

export function myCustomAudioProviderFactory() {
  return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    CrearPartidaPage,
    ConfigPage,
    UnirsePartidaPage,
    FlashCardComponent,
    PartidaPage,
    CartasSelecPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfigs),
    IonicAudioModule.forRoot(defaultAudioProviderFactory),
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    CrearPartidaPage,
    ConfigPage,
    UnirsePartidaPage,
    FlashCardComponent,
    PartidaPage,
    CartasSelecPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JugadorProvider,
    PartidaProvider,
    UltimapartidaProvider,
    NativeAudio,
    CartaProvider
  ],
})
export class AppModule {}
