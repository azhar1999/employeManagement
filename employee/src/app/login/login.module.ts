import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginCompComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
