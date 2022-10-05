import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
