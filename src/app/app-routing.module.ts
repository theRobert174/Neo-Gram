import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/layout/layout.module').then( m => m.LayoutPageModule)
  },
  {
    path: 'NeoGram',
    loadChildren: () => import('./tabs/layout/layout.module').then( m => m.LayoutPageModule)
  },
  {
    path: '**',
    redirectTo: 'NeoGram',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
