import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menuLista: any[] = [
    {
      nombre: 'Cuenta',
      icono: 'home-outline',
      redirect: '/home'
    },
    {
      nombre: 'Cuenta',
      icono: 'person-outline',
      redirect: '/perfil'
    },
    {
      nombre: 'Escanear Codigo',
      icono: 'qr-code-outline',
      redirect: '/codigo'
    },
    {
      nombre: 'Ajustes',
      icono: 'settings-outline',
      redirect: '/ajustes'
    },
    {
      nombre: 'Cerrar Sesión',
      icono: 'close-outline',
      redirect: '/login'
    }
  ];

  constructor() {}
}
