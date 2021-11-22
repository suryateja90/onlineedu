import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourserequirementsComponent } from './courserequirements.component';

describe('CourserequirementsComponent', () => {
  let component: CourserequirementsComponent;
  let fixture: ComponentFixture<CourserequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourserequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourserequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
