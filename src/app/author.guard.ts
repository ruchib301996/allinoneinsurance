import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { InfoService } from './comman-service/info.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorGuard implements CanActivate {
  constructor(private mySer1:InfoService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let rollID = 1;

    if(rollID===3){
      return true;

    } else
      return false;               
  }
  resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot){
    console.log("Hello this is resolver");
    console.log(this.mySer1.checkStudData());
    this.mySer1.checkStudData().subscribe((res:any)=>{
      console.log(res);
      return true;
    })
    
  }
}
