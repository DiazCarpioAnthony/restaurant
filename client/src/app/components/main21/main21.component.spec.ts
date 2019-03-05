import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Main21Component } from './main21.component';

describe('Main21Component', () => {
  let component: Main21Component;
  let fixture: ComponentFixture<Main21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
