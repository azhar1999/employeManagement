import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorisationService } from 'src/app/authorisation.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  id:any;
  constructor(private router:Router,private authService:AuthorisationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.isLoggedIn()) {
      return true;}
    this.router.navigate(['/login']);
    return false
    
  }
}
