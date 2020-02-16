import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/services/authGuard.service';

const routes: Routes = [
  { path: '', canActivate: [AuthGuardService], loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) },
  //{ path: '', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'login', loadChildren: () => import('./shared/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
