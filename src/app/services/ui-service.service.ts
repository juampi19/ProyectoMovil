import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor( private alertaCrtl: AlertController ) { }

  async alertaInformativa( message: string ) {
    const alert = await this.alertaCrtl.create({
      backdropDismiss: false,
      header: 'Datos Incorrectos',
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
