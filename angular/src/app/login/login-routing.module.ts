import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LpageComponent} from "./lpage/lpage.component";



const routes: Routes = [
  {path: "", component:LpageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
