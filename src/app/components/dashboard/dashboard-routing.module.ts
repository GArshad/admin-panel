import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from '../analysis/analysis.component';
import { DashboardComponent } from './dashboard.component';
import { GeneralDashboardComponent } from './general-dashboard/general-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: GeneralDashboardComponent
      },
      {
        path: 'analysis',
        component: AnalysisComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/website-logo',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
