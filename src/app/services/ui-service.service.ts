import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor( private alertaCrtl: AlertController, private toastCtrl: ToastController ) { }

  async alertaInformativa( message: string ) {
    const alert = await this.alertaCrtl.create({
      backdropDismiss: false,
      header: 'Datos Incorrectos',
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500,
      position: 'top'
    });

    await toast.present();
  }
}
