import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { BaseDialogComponent } from './base-dialog/base-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    DashboardComponent,
    BaseDialogComponent,
  ],
  imports: [
    LoadingBarHttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
