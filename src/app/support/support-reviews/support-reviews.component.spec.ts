import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportReviewsComponent } from './support-reviews.component';

describe('SupportReviewsComponent', () => {
  let component: SupportReviewsComponent;
  let fixture: ComponentFixture<SupportReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
