import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { SigninRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SigninRoutingModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
