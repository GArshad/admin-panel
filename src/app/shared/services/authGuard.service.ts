/**
 * Auth Guard Service
 * Secure routes from unauthorized access using canActivate() route guard method
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

 import { Injectable } from '@angular/core';
 import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
 import { AuthService } from "./auth.service";
 import { Observable } from 'rxjs';
 @Injectable({
   providedIn: 'root'
 })

 export class AuthGuardService implements CanActivate {

   constructor(
     public authService: AuthService,
     public router: Router
   ) { }

   canActivate(
     next: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     if (this.authService.isLoggedIn !== true) {
       this.router.navigate(['login'])
     }
     return true;
   }
 }
