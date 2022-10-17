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

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
  ];

  avatarSlide = {
    slidesPerView: 3.5
  };

  loginUser = {
    email: 'cookie@correo.com',
    password: '123456'
  };

  registerUser = {
    email: 'test',
    password: '123456',
    nombre: 'test'
  };

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

  seleccionarAvatar( avatar ) {

    this.avatars.forEach( av => av.seleccionado = false );
    avatar.seleccionado = true;

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
