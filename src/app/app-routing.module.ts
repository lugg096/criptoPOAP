import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { noLoginGuard } from './guards/noLogin.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [noLoginGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'statements',
    pathMatch: 'full'
  },
  {
    path: 'statements',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/statements/statements.module').then( m => m.StatementsPageModule)
  },
  {
    path: 'form/:data',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/statement-form/statement-form.module').then( m => m.StatementFormPageModule)
  },

  {
    path: 'import-wallet',
    loadChildren: () => import('./pages/import-wallet/import-wallet.module').then( m => m.ImportWalletPageModule)
  },
  {
    path: 'galllery',
    loadChildren: () => import('./pages/galllery/galllery.module').then( m => m.GallleryPageModule)
  },
  {
    path: 'blocking',
    loadChildren: () => import('./blocking/blocking.module').then( m => m.BlockingPageModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./page/contract/contract.module').then( m => m.ContractPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
