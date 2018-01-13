import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SecuritySidebarComponent } from './security-sidebar/security-sidebar.component';
import { SecurityMainComponent } from './security-main/security-main.component';

const routes: Routes = [
  {
    path: 'security',
    children: [
      { path: 'main', component: SecurityMainComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SecuritySidebarComponent, SecurityMainComponent]
})
export class SecurityModule { }
