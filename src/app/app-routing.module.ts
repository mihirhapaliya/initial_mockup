import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthgaurdService } from './authgaurd.service';


const routes: Routes = [
  {
    path:'login',
    loadChildren:'./user/user.module#UserModule'
 },
 {
 path:'',
 loadChildren:'./page/page.module#PageModule',
 canActivate:[AuthgaurdService]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
