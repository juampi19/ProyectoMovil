import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: Usuario = {};

  constructor( private usuarioService: UsuarioService, private uiService: UiServiceService ) { }

  ngOnInit() {

    this.usuario = this.usuarioService.getUsuario();


  }

  async actualizar( fActualizar: NgForm ) {

    if( fActualizar.invalid ) { return; }

    const actualizado = await this.usuarioService.actualizarUsuario( this.usuario );

    console.log( actualizado );

    if( actualizado ) {
      //toast con mensaje
      this.uiService.presentToast( 'Usuario Actualizado' );
    }else {
      //toast con error
      this.uiService.presentToast( 'No se pudo actualizar' );
    }

  }


  logout() {

  }

}
