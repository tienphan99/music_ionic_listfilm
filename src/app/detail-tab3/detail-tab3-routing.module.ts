import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTab3Page } from './detail-tab3.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTab3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTab3PageRoutingModule {}
