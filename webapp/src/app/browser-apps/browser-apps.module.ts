import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAppsSidebarComponent } from './browser-apps-sidebar/browser-apps-sidebar.component';
import { BrowserAppsListComponent } from './browser-apps-list/browser-apps-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BrowserAppsSidebarComponent, BrowserAppsListComponent]
})
export class BrowserAppsModule { }
