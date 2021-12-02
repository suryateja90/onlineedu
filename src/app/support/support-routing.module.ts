import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupportinfoComponent } from './supportinfo/supportinfo.component';

const routes: Routes = [
  {
    path: '',
    component: SupportinfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }