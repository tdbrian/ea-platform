import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingMainComponent } from './testing-main/testing-main.component';
import { TestingSidebarComponent } from './testing-sidebar/testing-sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TestingMainComponent, TestingSidebarComponent]
})
export class TestingModule { }
