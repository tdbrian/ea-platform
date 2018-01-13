import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegrationsSidebarComponent } from './integrations-sidebar/integrations-sidebar.component';
import { IntegrationsListComponent } from './integrations-list/integrations-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IntegrationsSidebarComponent, IntegrationsListComponent]
})
export class IntegrationsModule { }
