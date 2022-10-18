import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  private usuario: Usuario = {};

  constructor( private http: HttpClient, private storage: Storage, private navCtrl: NavController ) {
    this.storage.create();
  }

  login( email: string, password: string ) {

    const data = { email, password };

    return new Promise( resolve => {
      this.http.post( `${ URL }/user/login`, data )
        .subscribe( resp => {
          console.log( resp );
          // eslint-disable-next-line @typescript-eslint/dot-notation
          if( resp['ok'] ) {
            // eslint-disable-next-line @typescript-eslint/dot-notation
            this.guardarToken( resp['token'] );
            resolve( true );
          }else {
            this.token = null;
            this.storage.clear();
            resolve( false );
          }
        } );

    });

  }

  registro( usuario: Usuario ) {

    return new Promise( resolve => {

      this.http.post( `${ URL }/user/create`, usuario )
        .subscribe( resp => {
          console.log( resp );

          // eslint-disable-next-line @typescript-eslint/dot-notation
          if( resp['ok'] ) {
            // eslint-disable-next-line @typescript-eslint/dot-notation
            this.guardarToken( resp['token'] );
            resolve( true );
          }else {
            this.token = null;
            this.storage.clear();
            resolve( false );
          }
        } );

    } );

  }

  getUsuario() {

    if( !this.usuario.email ) {
      this.validarToken();
    }

    return { ...this.usuario };

  }

  async guardarToken( token: string ){
    this.token = token;
    await this.storage.set( 'token', token );
  }

  async cargarStorage() {
    this.token = await this.storage.get( 'token' ) || null;
  }


  async validarToken(): Promise<boolean> {

    await this.cargarStorage();

    if( !this.token ) {
      this.navCtrl.navigateRoot('/e404');
      return Promise.resolve( false );
    }

    return new Promise<boolean> ( resolve => {

      const headers = new HttpHeaders({
        'x-token': this.token
      });

      this.http.get( `${ URL }/user/`, { headers } )
        .subscribe( resp => {

          // eslint-disable-next-line @typescript-eslint/dot-notation
          if( resp['ok'] ){
            // eslint-disable-next-line @typescript-eslint/dot-notation
            this.usuario = resp['usuario'];
            resolve(true);
          }else {
            this.navCtrl.navigateRoot('/e404');
            resolve(false);
          }

        } );


    } );

  }

}
