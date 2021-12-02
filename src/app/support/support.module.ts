import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SupportinfoComponent } from './supportinfo/supportinfo.component';
import { SupportBannerComponent } from './support-banner/support-banner.component';
import { SupportRoutingModule } from './support-routing.module';
import { InfocourseComponent } from '../course/infocourse/infocourse.component';
import { PricingComponent } from './pricing/pricing.component';
import { CourserequirementsComponent } from '../course/courserequirements/courserequirements.component';
import { TechiesComponent } from './techies/techies.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';
import { SupportReviewsComponent } from './support-reviews/support-reviews.component';



@NgModule({
  declarations: [SupportinfoComponent, SupportBannerComponent,
    CourserequirementsComponent, InfocourseComponent, PricingComponent, TechiesComponent, PricingTableComponent, SupportReviewsComponent],
  imports: [
    CommonModule,
    SupportRoutingModule,
    NgbModule,
  ]
})
export class SupportModule { }
