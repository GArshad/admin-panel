import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { GeneralDashboardComponent } from './general-dashboard/general-dashboard.component';
import { AnalysisComponent } from '../analysis/analysis.component';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { LinearChartComponent } from '../linear-chart/linear-chart.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    NgChartsModule
  ],
  declarations: [
    DashboardComponent,
    GeneralDashboardComponent,
    AnalysisComponent,
    SidenavComponent,
    HeaderComponent,
    LinearChartComponent
  ]
})
export class DashboardModule { }
