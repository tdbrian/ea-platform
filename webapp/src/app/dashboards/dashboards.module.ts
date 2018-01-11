import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DashboardsSidebarComponent } from './dashboards-sidebar/dashboards-sidebar.component';

const routes: Routes = [
  { path: 'dashboards/main', component: MainDashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainDashboardComponent, DashboardsSidebarComponent]
})
export class DashboardsModule { }
