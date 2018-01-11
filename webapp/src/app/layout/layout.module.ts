import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarNavComponent],
  exports: [SidebarNavComponent]
})
export class LayoutModule { }
