import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocourseComponent } from './infocourse.component';

describe('InfocourseComponent', () => {
  let component: InfocourseComponent;
  let fixture: ComponentFixture<InfocourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfocourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
