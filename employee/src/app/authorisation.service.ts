import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { IEmp } from './interface';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {
  getArray: any[] = []
  empArray: IEmp[] = [];

  constructor(private getLocal:LocalstorageService) { }

  login(credentials: any): Observable<any> {

    this.getLocal.getFromLocalStorage().subscribe(result=>{
      this.getArray=result
    })
    
    for (var i = 0; i < this.getArray.length; i++) {

      const b = this.getArray[i];

      if (b.empUsername === credentials.username && b.password === credentials.password) {

        this.empArray.push({

          empId: b.empId,
          empUsername: b.empUsername,
          empName: b.empName,
          teamNumber: b.teamNumber,
          phoneNumber: b.phoneNumber,
          addressInformation: b.addressInformation,
          password: b.password

        })
        localStorage.setItem('currentUser', JSON.stringify(this.empArray));
        return of(true)
      }
    }
    return of(false)
  }

  logout() {
    alert("You have succesfully logged out from current account")
    localStorage.removeItem('currentUser')
  }

  isLoggedIn() {
    const log = localStorage.getItem('currentUser')
    if (!log) {
      return false
    }

    else {
      return true
    }
  }

  get currentUser() {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (!user) return null;
    else return user

  }
}
