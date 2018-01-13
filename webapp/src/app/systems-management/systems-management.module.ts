import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SystemsManagementSidebarComponent } from './systems-management-sidebar/systems-management-sidebar.component';
import { SystemsManagementMainComponent } from './systems-management-main/systems-management-main.component';

const routes: Routes = [
  {
    path: 'security',
    children: [
      { path: 'main', component: SystemsManagementMainComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SystemsManagementSidebarComponent, SystemsManagementMainComponent]
})
export class SystemsManagementModule { }
