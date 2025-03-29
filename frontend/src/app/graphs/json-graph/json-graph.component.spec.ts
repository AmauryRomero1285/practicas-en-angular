import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonGraphComponent } from './json-graph.component';

describe('JsonGraphComponent', () => {
  let component: JsonGraphComponent;
  let fixture: ComponentFixture<JsonGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
