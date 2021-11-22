import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostpageComponent } from './blogpostpage.component';

describe('BlogpostpageComponent', () => {
  let component: BlogpostpageComponent;
  let fixture: ComponentFixture<BlogpostpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogpostpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
