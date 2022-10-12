import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    email: '',
    password: '',
  };

  constructor( private router: Router, private menu: MenuController, private alertaCrtl: AlertController ) { }

  ngOnInit() {
    this.menu.enable( false, 'first' );
  }

  async presentAlert() {
    const alert = await this.alertaCrtl.create({
      backdropDismiss: false,
      header: 'Datos Incorrectos',
      message: 'Ingrese nuevamente usuario y contraseña',
      buttons: ['OK'],
    });

    await alert.present();
  }

  onSubmit() {
    if( this.usuario.email !== 'prueba@correo.com' ) {
      this.presentAlert();
      return;
    }
    const navegationExtras: NavigationExtras = {
      state: this.usuario
    };
    this.router.navigate(['/home'], navegationExtras);
  }

}
