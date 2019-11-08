import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  
})
export class PageComponent implements OnInit {

  constructor(private router:Router) { }
 username:string;
  ngOnInit() {
    this.username=sessionStorage.getItem('AUTH_TOKEN');
  }
  logout()
  {
    sessionStorage.removeItem('AUTH_TOKEN');
    this.router.navigateByUrl('/login');
  }
}
