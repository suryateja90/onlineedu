import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeinfoComponent } from './homeinfo/homeinfo.component';
import { BlogpostsComponent } from './blogposts/blogposts.component';
import { BlogpostpageComponent } from './blogpostpage/blogpostpage.component';

const routes: Routes = [
  {
    path: '',
    component: HomeinfoComponent
  },
  {
    path: 'blogposts',
    component: BlogpostsComponent
  },
  {
      path: 'blogpostpage',
      component: BlogpostpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }