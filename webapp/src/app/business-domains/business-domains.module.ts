import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessDomainsSidebarComponent } from './business-domains-sidebar/business-domains-sidebar.component';
import { BusinessDomainsListComponent } from './business-domains-list/business-domains-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BusinessDomainsSidebarComponent, BusinessDomainsListComponent]
})
export class BusinessDomainsModule { }
