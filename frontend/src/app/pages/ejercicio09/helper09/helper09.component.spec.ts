import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Helper09Component } from './helper09.component';

describe('Helper09Component', () => {
  let component: Helper09Component;
  let fixture: ComponentFixture<Helper09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Helper09Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Helper09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
