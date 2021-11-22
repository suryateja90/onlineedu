import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseinfolayoutComponent } from './courseinfolayout.component';

describe('CourseinfolayoutComponent', () => {
  let component: CourseinfolayoutComponent;
  let fixture: ComponentFixture<CourseinfolayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseinfolayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseinfolayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
