import { AbstractType, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorisationService } from './authorisation.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private router:Router,private authService:AuthorisationService) { }
  id:any;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.currentUser){
      const user:any=this.authService.currentUser;
      this.id = route.paramMap.get('username')
      if((user[0].empUsername==this.id)||(user[0].teamNumber==7)||(user[0].teamNumber==8)){
        return true}
        else 
        {
          alert("user cant access this card")
          return false
        }
    }
    else return false
  }
}
