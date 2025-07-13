import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { MaterialModule } from '../shared/material.module';
import { DashboardComponent } from './dashboard.component/dashboard.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,

  ]
})
export class DashboardModule { }
