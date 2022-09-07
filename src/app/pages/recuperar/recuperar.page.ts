import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  usuario = {
    email: '',
    password: '',
  };

  constructor( private alertaCrtl: AlertController ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertaCrtl.create({
      backdropDismiss: false,
      header: 'Correo Enviado',
      message: 'Hemos enviado un correo con las indicaciónes a seguir',
      buttons: ['OK'],
    });

    await alert.present();
  }

  onSubmit(){
    this.presentAlert();
  }

}
