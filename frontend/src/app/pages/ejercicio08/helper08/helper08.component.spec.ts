import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Helper08Component } from './helper08.component';

describe('Helper08Component', () => {
  let component: Helper08Component;
  let fixture: ComponentFixture<Helper08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Helper08Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Helper08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
