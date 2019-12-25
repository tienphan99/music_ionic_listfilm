import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailTab1PageRoutingModule } from './detail-tab1-routing.module';

import { DetailTab1Page } from './detail-tab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTab1PageRoutingModule
  ],
  declarations: [DetailTab1Page]
})
export class DetailTab1PageModule {}
