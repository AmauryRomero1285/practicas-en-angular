import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGraphComponent } from './api-graph.component';

describe('ApiGraphComponent', () => {
  let component: ApiGraphComponent;
  let fixture: ComponentFixture<ApiGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
