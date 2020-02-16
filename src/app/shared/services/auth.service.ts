 import { Injectable } from '@angular/core';
 import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
 import { Observable, Subject } from 'rxjs';
 @Injectable({
   providedIn: 'root'
 })

 export class AuthService{
   isLoggedIn = false;
   error = new Subject<string>();
   constructor(
     public router: Router
   ) { }

   login(username: string, password: string): void{
    if(username === 'admin' && password === 'admin'){
      this.isLoggedIn = true;
      this.router.navigate(['']);
      this.error.next('');
    }else{
      this.error.next('Wrong username and password');
    }
    console.log('login ran');
   }

   logout(): void{
    this.isLoggedIn = false;
    this.router.navigate(['login']);
   }
 }
