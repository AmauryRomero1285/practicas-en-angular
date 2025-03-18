import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Helper12Component } from './helper12.component';

describe('Helper12Component', () => {
  let component: Helper12Component;
  let fixture: ComponentFixture<Helper12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Helper12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Helper12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
