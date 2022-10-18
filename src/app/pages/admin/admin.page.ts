import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiServiceService } from '../../services/ui-service.service';
import { Usuario } from '../../interfaces/interfaces';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  @ViewChild( 'slidePrincipa', { static: true } ) slides: IonSlides;



  loginUser = {
    email: 'cookie1@correo.com',
    password: '123456'
  };

  registerUser: Usuario = {
    email: 'test',
    password: '123456',
    nombre: 'test',
    avatar: 'av-1.png'
  };
  usuario: Usuario = {};

  constructor( private usuarioService: UsuarioService,
    private navCtrl: NavController, private uiService: UiServiceService,
    private storage: Storage ) { }

  ngOnInit() {
    this.slides.lockSwipes( true );
  }

  async login( fLogin: NgForm ) {

    if( fLogin.invalid ) {
      return;
    }

    const valido = await this.usuarioService.login( this.loginUser.email, this.loginUser.password );

    if( valido ) {
      //navegar al al menu
      await this.storage.set( 'user', this.loginUser.email );
      this.navCtrl.navigateRoot( '/home', { animated: true } );
    }else {
      //Mostrar alerta
      this.uiService.alertaInformativa( 'Usuario y Contraseña no son correctos.' );
    }

  }

  async registro( fRegistro: NgForm ) {

    if( fRegistro.invalid ) { return; }

    const valido = await this.usuarioService.registro( this.registerUser );

    if( valido ) {
      //navegar al al menu
      await this.storage.set( 'user', this.registerUser.email );
      this.navCtrl.navigateRoot( '/home', { animated: true } );
    }else {
      //Mostrar alerta
      this.uiService.alertaInformativa( 'Ese correo electrónico ya existe.' );
    }
  }


  mostrarRegistro() {
    this.slides.lockSwipes( false );
    this.slides.slideTo(0);
    this.slides.lockSwipes( true );
  }

  mostrarLogin() {
    this.slides.lockSwipes( false );
    this.slides.slideTo(1);
    this.slides.lockSwipes( true );
  }

}
