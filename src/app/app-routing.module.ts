import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from './shared/guards/authentication.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [ AuthenticationGuard ],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
