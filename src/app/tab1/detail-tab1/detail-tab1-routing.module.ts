import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTab1Page } from './detail-tab1.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTab1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTab1PageRoutingModule {}
