import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursebannerComponent } from './coursebanner.component';

describe('CoursebannerComponent', () => {
  let component: CoursebannerComponent;
  let fixture: ComponentFixture<CoursebannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursebannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
