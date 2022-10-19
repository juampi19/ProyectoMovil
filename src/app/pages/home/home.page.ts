import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ToastController, MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';

import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

declare let window: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  routerState: any;
  user: any;
  usuario: Usuario = {};

  constructor( private router: Router,
               private activeroute: ActivatedRoute,
               public toasCtrl: ToastController,
               private menu: MenuController, private storage: Storage,
               private navCtrl: NavController,
               private usuarioService: UsuarioService,
               private camera: Camera  ) {

                this.storage.create();
  }

  ngOnInit(){
    this.menu.enable( true, 'first' );
    this.usuario = this.usuarioService.getUsuario();
  }

  clear() {

  }

  async toast() {
    const toast = await this.toasCtrl.create({
      message: 'Información guardada',
      duration: 2000
    });
    toast.present();
  }

  mostarAyuda() {
    this.navCtrl.navigateRoot('/ayuda');
  }

  mostrarCamara() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
    const img = window.Ionic.WebView.convertFileSrc( imageData );
    console.log( img );
    }, (err) => {
     // Handle error
    });

  }

}
