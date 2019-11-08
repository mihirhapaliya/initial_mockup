import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
import {PageRoutingModule} from './page-routing.module';


@NgModule({
  declarations: [PageComponent, DashboardComponent,PatientComponent],
  imports: [
    CommonModule,
    PageRoutingModule
      
  ],
  bootstrap:[PageComponent]

})
export class PageModule { }
