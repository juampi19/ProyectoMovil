import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: Usuario = {};

  constructor( private usuarioService: UsuarioService ) { }

  ngOnInit() {

    this.usuario = this.usuarioService.getUsuario();


  }


  logout() {

  }

}
