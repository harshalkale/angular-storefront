import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  redirectUnauthorizedTo,
  AngularFireAuthGuard,
} from '@angular/fire/auth-guard';
import { map } from 'rxjs/Operators';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const redirectToLogin = () => redirectUnauthorizedTo(['/admin/login']);
const redirectToDashboard = () =>
  map((user) => {
    return user ? ['/admin'] : true;
  });

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectToLogin,
    },
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectToDashboard,
    },
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
