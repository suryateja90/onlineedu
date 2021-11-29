import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseservicesComponent } from './courseservices.component';

describe('CourseservicesComponent', () => {
  let component: CourseservicesComponent;
  let fixture: ComponentFixture<CourseservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
