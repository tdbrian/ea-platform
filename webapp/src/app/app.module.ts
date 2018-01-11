import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ApiServicesModule } from './api-services/api-services.module';
import { DashboardsModule } from './dashboards/dashboards.module';
import { LayoutModule } from './layout/layout.module';

const routes: Routes = [
  { path: '', redirectTo: '/dashboards/main', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    DashboardsModule,
    ApiServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
