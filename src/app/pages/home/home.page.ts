import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ToastController, MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';

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
               private usuarioService: UsuarioService  ) {

                this.storage.create();
  }

  ngOnInit(){
    this.storage.get('user').then( resp => {
        this.user =  resp.split('@')[0];
    } );
    this.menu.enable( true, 'first' );
    this.usuario = this.usuarioService.getUsuario();
    console.log( this.usuario );
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

}
