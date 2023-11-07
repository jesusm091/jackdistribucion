import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MejorarVersionComponent } from './mejorar-version.component';

describe('MejorarVersionComponent', () => {
  let component: MejorarVersionComponent;
  let fixture: ComponentFixture<MejorarVersionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MejorarVersionComponent]
    });
    fixture = TestBed.createComponent(MejorarVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
