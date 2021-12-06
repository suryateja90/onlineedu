import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsLayoutComponent } from './cons-layout/cons-layout.component';


const routes: Routes = [
  {
    path: '',
    component: ConsLayoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultancyRoutingModule { }
