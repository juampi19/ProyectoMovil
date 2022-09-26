import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SqlLitePageRoutingModule } from './sql-lite-routing.module';

import { SqlLitePage } from './sql-lite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SqlLitePageRoutingModule
  ],
  declarations: [SqlLitePage]
})
export class SqlLitePageModule {}
