import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TestingMainComponent } from './testing-main/testing-main.component';
import { TestingSidebarComponent } from './testing-sidebar/testing-sidebar.component';

const routes: Routes = [
  {
    path: 'security',
    children: [
      { path: 'main', component: TestingMainComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TestingMainComponent, TestingSidebarComponent]
})
export class TestingModule { }
