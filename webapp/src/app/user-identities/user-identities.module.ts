import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserIdentitiesSidebarComponent } from './user-identities-sidebar/user-identities-sidebar.component';
import { UserIdentitiesMainComponent } from './user-identities-main/user-identities-main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserIdentitiesSidebarComponent, UserIdentitiesMainComponent]
})
export class UserIdentitiesModule { }
