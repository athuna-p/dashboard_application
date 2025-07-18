import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component/dashboard.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard.component/dashboard.component').then(m => m.DashboardComponent)
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
