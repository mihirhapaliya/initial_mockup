import { Component, OnInit } from '@angular/core';
import { AuthgaurdService } from './authgaurd.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pathx1';
  private route: ActivatedRoute;
  constructor()
  {
    
  }
  ngOnInit()
  {
   
  }
   
  
}
