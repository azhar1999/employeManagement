import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)

  },
  {
      path: 'employeeList/:username', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
