import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsNavigationOptionsComponent } from './blogs-navigation-options.component';

describe('BlogsNavigationOptionsComponent', () => {
  let component: BlogsNavigationOptionsComponent;
  let fixture: ComponentFixture<BlogsNavigationOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsNavigationOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsNavigationOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
