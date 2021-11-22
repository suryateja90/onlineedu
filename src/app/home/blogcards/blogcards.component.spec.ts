import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcardsComponent } from './blogcards.component';

describe('BlogcardsComponent', () => {
  let component: BlogcardsComponent;
  let fixture: ComponentFixture<BlogcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
