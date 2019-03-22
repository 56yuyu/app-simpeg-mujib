import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';

import { PegawaiComponent } from './pegawai/pegawai.component';
import { PegawaiAddComponent } from './pegawai/addpegawai.component';
import { PegawaiEditComponent } from './pegawai/editpegawai.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'pegawai', component: PegawaiComponent },
  { path: 'create_pegawai', component: PegawaiAddComponent },
  { path: 'editpegawai/:id', component: PegawaiEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }