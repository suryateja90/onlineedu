import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsLayoutComponent } from './cons-layout.component';

describe('ConsLayoutComponent', () => {
  let component: ConsLayoutComponent;
  let fixture: ComponentFixture<ConsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
