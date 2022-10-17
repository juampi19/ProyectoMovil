import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ToastController, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  routerState: any;
  user: any;


  constructor( private router: Router,
               private activeroute: ActivatedRoute,
               public toasCtrl: ToastController,
               private menu: MenuController, private storage: Storage  ) {

                this.storage.create();

                this.activeroute.queryParams.subscribe(
                params => {
                  if(this.router.getCurrentNavigation().extras.state){
                    this.routerState = this.router.getCurrentNavigation().extras.state;
                  }
                }
              );
  }

  ngOnInit(){
    this.storage.get('user').then( resp => {
        this.user =  resp.split('@')[0];
    } );
    this.menu.enable( true, 'first' );
  }

  clear() {

  }

  async toast() {
    const toast = await this.toasCtrl.create({
      message: 'Información guardada',
      duration: 2000
    });
    toast.present();
  }


}
