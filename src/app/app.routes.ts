import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmptyComponent } from './empty/empty.component';
import { OverviewComponent } from './overview/overview.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

export const pageRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'empty', component: EmptyComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(pageRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
