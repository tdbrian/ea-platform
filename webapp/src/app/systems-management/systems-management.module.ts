import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemsManagementSidebarComponent } from './systems-management-sidebar/systems-management-sidebar.component';
import { SystemsManagementMainComponent } from './systems-management-main/systems-management-main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SystemsManagementSidebarComponent, SystemsManagementMainComponent]
})
export class SystemsManagementModule { }
