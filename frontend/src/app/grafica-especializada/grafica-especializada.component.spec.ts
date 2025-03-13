import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaEspecializadaComponent } from './grafica-especializada.component';

describe('GraficaEspecializadaComponent', () => {
  let component: GraficaEspecializadaComponent;
  let fixture: ComponentFixture<GraficaEspecializadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaEspecializadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaEspecializadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
