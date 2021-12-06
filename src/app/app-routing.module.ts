import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'courseinfo',
    loadChildren: './course/course.module#CourseModule'
  },
  {
    path: 'supportinfo',
    loadChildren: './support/support.module#SupportModule'
  },
  {
    path: 'consultancyinfo/:id',
    loadChildren: () => import('./consultancy/consultancy.module').then(m => m.ConsultancyModule)
  },
  {
    path: '',
    redirectTo: 'courseinfo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
