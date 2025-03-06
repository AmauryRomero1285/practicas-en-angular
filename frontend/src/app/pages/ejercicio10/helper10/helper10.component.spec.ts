import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Helper10Component } from './helper10.component';

describe('Helper10Component', () => {
  let component: Helper10Component;
  let fixture: ComponentFixture<Helper10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Helper10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Helper10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
