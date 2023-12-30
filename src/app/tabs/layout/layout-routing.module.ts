import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutPage } from './layout.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      {
        path: 'feed',
        loadChildren: () => import('./../pages/feed/feed.module').then(m => m.FeedPageModule )
      },
      {
        path: 'profile',
        loadChildren: () => import('./../pages/profile/profile.module').then(m => m.ProfilePageModule )
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'feed'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule {}
