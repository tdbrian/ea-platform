import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ApiServicesSidebarComponent } from './api-services-sidebar/api-services-sidebar.component';
import { ApiServicesListComponent } from './api-services-list/api-services-list.component';

const routes: Routes = [
  { path: 'api-services/list', component: ApiServicesListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApiServicesSidebarComponent, ApiServicesListComponent]
})
export class ApiServicesModule { }
