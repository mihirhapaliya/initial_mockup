import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  public uname:string="";
  public pwd:string="";
 
  ngOnInit() {
    
  }
  public login()
  {
    if(this.uname=="admin"&&this.pwd=="admin")
    {
      sessionStorage.setItem("AUTH_TOKEN",this.uname);
     
      this.router.navigateByUrl("/");
      
    }
    else
    {
      alert("Username or Password is incorrect");
    }
  
  }
}
