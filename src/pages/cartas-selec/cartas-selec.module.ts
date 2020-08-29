import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartasSelecPage } from './cartas-selec';

@NgModule({
  declarations: [
    CartasSelecPage,
  ],
  imports: [
    IonicPageModule.forChild(CartasSelecPage),
  ],
})
export class CartasSelecPageModule {}
