import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosComponent } from './beneficios.component';

describe('BeneficiosComponent', () => {
  let component: BeneficiosComponent;
  let fixture: ComponentFixture<BeneficiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeneficiosComponent]
    });
    fixture = TestBed.createComponent(BeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
