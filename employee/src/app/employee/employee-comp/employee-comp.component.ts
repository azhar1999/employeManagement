import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { IEmp, ITeam } from 'src/app/interface';
import { LocalstorageService } from 'src/app/localstorage.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-employee-comp',
  templateUrl: './employee-comp.component.html',
  styleUrls: ['./employee-comp.component.css']
})
export class EmployeeCompComponent implements OnInit {

  getEmp:IEmp[]=[]
  teamName:any;

  constructor(private route:ActivatedRoute,private getlocal:LocalstorageService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const user=params.get('username')
      forkJoin([
        this.getlocal.getFromLocalStorage(),
        this.getlocal.getTeamName()
      ]).subscribe(([empArray, teamarray]) => {
        
        for(var i=0;i<empArray.length;i++){
          const b=empArray[i];
          if(b.empUsername===user){
            this.getEmp.push(b)
            for(var i=0;i<teamarray.length;i++){
              if (b.teamNumber==teamarray[i].teamNumber){
                this.teamName=teamarray[i].teamName
              }
            }
            return
          }
        }
      })

    })
  }

}
