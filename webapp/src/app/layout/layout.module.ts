import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { CornerLogoComponent } from './corner-logo/corner-logo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SidebarNavComponent,
    CornerLogoComponent
  ],
  exports: [
    SidebarNavComponent,
    CornerLogoComponent
  ]
})
export class LayoutModule { }
