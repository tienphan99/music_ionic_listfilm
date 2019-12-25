import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailTab3PageRoutingModule } from './detail-tab3-routing.module';

import { DetailTab3Page } from './detail-tab3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTab3PageRoutingModule
  ],
  declarations: [DetailTab3Page]
})
export class DetailTab3PageModule {}
