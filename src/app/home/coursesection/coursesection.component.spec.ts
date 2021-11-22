import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesectionComponent } from './coursesection.component';

describe('CoursesectionComponent', () => {
  let component: CoursesectionComponent;
  let fixture: ComponentFixture<CoursesectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
