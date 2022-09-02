import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

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

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  onSubmit() {
    const navegationExtras: NavigationExtras = {
      state: this.usuario
    };
    this.router.navigate(['/home'], navegationExtras);
  }

}
