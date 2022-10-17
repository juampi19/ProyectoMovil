import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor( private router: Router) {
  }

  canActivate() {
    this.router.navigate( ['login'] );
    return false;
  }
}
