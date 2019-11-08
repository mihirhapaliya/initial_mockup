import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthgaurdService } from '../authgaurd.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page.component';
import { PatientComponent } from './patient/patient.component';



const routes: Routes = [
    {
        path:'', 
        component:PageComponent,
        children:[
          {
            path:'dashboard',
            component:DashboardComponent,
            canActivate:[AuthgaurdService]
          },
          {
            path:'patient',
            component:PatientComponent,
            canActivate:[AuthgaurdService]
          }
        ]
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule{}
