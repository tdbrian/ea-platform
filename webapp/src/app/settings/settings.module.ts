import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SettingsSidebarComponent } from './settings-sidebar/settings-sidebar.component';
import { SettingsMainComponent } from './settings-main/settings-main.component';

const routes: Routes = [
  {
    path: 'security',
    children: [
      { path: 'main', component: SettingsMainComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SettingsSidebarComponent, SettingsMainComponent]
})
export class SettingsModule { }
