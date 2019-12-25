import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    children:[
      {
        path:'',
        loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path:':tab1Id',
        loadChildren: () => import('./tab1/detail-tab1/detail-tab1.module').then( m => m.DetailTab1PageModule)
      }
    ]
  },
  // {
  //   path: 'tab3',
  //   children:[
  //     {
  //       path:'',
  //       loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  //     },
  //     {
  //       path:':tab3Id',
  //       loadChildren: () => import('./tab3/detail-tab3/detail-tab3.module').then( m => m.DetailTab3PageModule)
  //     }
  //   ]
  // },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
