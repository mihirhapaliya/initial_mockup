import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService implements CanActivate {
  public user;
  constructor(private router:Router) { this.user=sessionStorage.getItem('AUTH_TOKEN')}
  
  public canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    if(sessionStorage.getItem('AUTH_TOKEN')!=null)
    {
      
      return true;

    }
    else
    {
      this.router.navigateByUrl("/login");
      return false;
      
    }
  }
}
