import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessAnalyticsSidebarComponent } from './business-analytics-sidebar/business-analytics-sidebar.component';
import { BusinessAnalyticsMainComponent } from './business-analytics-main/business-analytics-main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BusinessAnalyticsSidebarComponent, BusinessAnalyticsMainComponent]
})
export class BusinessAnalyticsModule { }
