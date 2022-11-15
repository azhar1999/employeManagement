import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { any } from '@uirouter/angular';
import { forkJoin } from 'rxjs';
import { AuthorisationService } from 'src/app/authorisation.service';
import { IEmp, ITeam } from 'src/app/interface';
import { LocalstorageService } from 'src/app/localstorage.service';



@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.css']
})
export class HomeCompComponent implements OnInit {

  constructor(private router:Router,private authService:AuthorisationService,private getlocal:LocalstorageService) { }

   empArray: IEmp[]=[];
   teamArray:ITeam[]=[];
   teamName:any;
   

  ngOnInit(): void {

    forkJoin([
      this.getlocal.getFromLocalStorage(),
      this.getlocal.getTeamName()
    ]).subscribe(([employeeArray, teamarray]) => {
   
    this.empArray=employeeArray
    this.teamArray=teamarray})

  }
  clickCard(emp:any){

    this.router.navigate(['/employeeList',emp.empUsername])

  }

  }


