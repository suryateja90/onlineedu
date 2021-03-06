import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeinfoComponent } from './homeinfo/homeinfo.component';
import { BlogpostsComponent } from './blogposts/blogposts.component';
import { BlogpostpageComponent } from './blogpostpage/blogpostpage.component';
import { GenericPaginationComponent } from './generic-pagination/generic-pagination.component';
import { RoadmapComponent } from './roadmap/roadmap.component';

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
  }, 
  {
    path: 'pagin',
    component: GenericPaginationComponent
  },
  {
    path: 'roadmap',
    component: RoadmapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }