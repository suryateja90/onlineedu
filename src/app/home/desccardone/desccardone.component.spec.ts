import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesccardoneComponent } from './desccardone.component';

describe('DesccardoneComponent', () => {
  let component: DesccardoneComponent;
  let fixture: ComponentFixture<DesccardoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesccardoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesccardoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
