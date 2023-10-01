import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { authGuard } from './auth.guard';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { AdminComponent } from './admin/admin.component';
import { MilestoneComponent } from './milestone/milestone.component';

const routes: Routes = [
  {path:"", component: DashboardComponent, canActivate: [authGuard] }, 
  {path: "content", component: MainPageComponent, canActivate: [authGuard] }, 
  {path: "login", component: LoginPageComponent}, 
  {path: "register", component: RegisterPageComponent}, 
  {path: "settings", component: SettingsPageComponent, canActivate: [authGuard]}, 
  {path: "admin", component: AdminComponent, canActivate: [authGuard]}, 
  {path: "milestone", component: MilestoneComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
