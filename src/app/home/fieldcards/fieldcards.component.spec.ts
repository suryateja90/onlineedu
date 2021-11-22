import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldcardsComponent } from './fieldcards.component';

describe('FieldcardsComponent', () => {
  let component: FieldcardsComponent;
  let fixture: ComponentFixture<FieldcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
