import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {UserRoutingModule} from './user-routing.module'


@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
