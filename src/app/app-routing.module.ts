import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { DashboardComponent } from './dashboard-page/dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './modals/login/login.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  // {path: 'index', component: IndexComponent},
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [GuardGuard]},
  // {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
