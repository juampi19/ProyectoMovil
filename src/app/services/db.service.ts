import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SQLiteObject } from '@ionic-native/sqlite';
import { SQLite } from '@ionic-native/sqlite/ngx';

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
