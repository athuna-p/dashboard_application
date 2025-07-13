import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule)
    },
    // { path: 'dashboard', component: DashboardComponent },
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard-module').then(m => m.DashboardModule)
    },
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutes { }




