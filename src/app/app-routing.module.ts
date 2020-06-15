import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './layout/error/error.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ShopComponent } from './layout/shop/shop.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () =>
      import('@modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    component: ShopComponent,
    loadChildren: () =>
      import('@modules/shop/shop.module').then((m) => m.ShopModule),
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
