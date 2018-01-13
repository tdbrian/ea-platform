import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuritySidebarComponent } from './security-sidebar/security-sidebar.component';
import { SecurityMainComponent } from './security-main/security-main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SecuritySidebarComponent, SecurityMainComponent]
})
export class SecurityModule { }
