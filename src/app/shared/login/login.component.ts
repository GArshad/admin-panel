import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error = ''
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.error.subscribe((error:string)=>{
      this.error = error;
    });
  }

  login(email: string, password: string): void {
    this.authService.login(email, password);
  }

}
