import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaHomeComponent } from './galeria-home.component';

describe('GaleriaHomeComponent', () => {
  let component: GaleriaHomeComponent;
  let fixture: ComponentFixture<GaleriaHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaleriaHomeComponent]
    });
    fixture = TestBed.createComponent(GaleriaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
