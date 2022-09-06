import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MenuController } from '@ionic/angular';

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

  constructor( private router: Router, private menu: MenuController ) { }

  ngOnInit() {
  }

  onSubmit() {
    const navegationExtras: NavigationExtras = {
      state: this.usuario
    };
    this.router.navigate(['/home'], navegationExtras);
  }

}
