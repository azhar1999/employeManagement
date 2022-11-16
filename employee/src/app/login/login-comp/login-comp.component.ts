import { Component, OnInit } from '@angular/core';
import {  FormBuilder,FormControl, FormGroup, UntypedFormBuilder,ValidatorFn, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { any } from '@uirouter/angular';
import { AuthorisationService } from 'src/app/authorisation.service';
import { IEmp } from 'src/app/interface';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {

  formgroup !: FormGroup;
  getArray:IEmp[]=[]
  invalidLogin!:boolean 
  credentials:any={
    username:'',
    password:''}
  constructor(private router:Router,private authService:AuthorisationService) { }

  ngOnInit(): void {
    this.formgroup = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      
    });
  }
  submit():any{
    
    this.credentials.username=this.formgroup.value.username
    this.credentials.password=this.formgroup.value.password

    this.authService.login(this.credentials).subscribe(result=>{
      
    if (result){

      this.router.navigate(['/employeeList',this.formgroup.value.username])}
      else{
        alert("username and password doesn't match")
      this.invalidLogin=true}
    });
  }
  }

