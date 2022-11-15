import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCompComponent } from './employee-comp/employee-comp.component';
import { EmployeeRoutingModule } from './employee-routing.module';



@NgModule({
  declarations: [
    EmployeeCompComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
