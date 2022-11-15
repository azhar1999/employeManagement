import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuardService } from '../admin-auth-guard.service';
import { AuthGuardService } from '../auth-guard.service';
import { EmployeeCompComponent } from './employee-comp/employee-comp.component';




const routes: Routes = [
  { path: '', component: EmployeeCompComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EmployeeRoutingModule { }