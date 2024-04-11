import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarClientesComponent } from './gerenciar-clientes.component';

describe('GerenciarClientesComponent', () => {
  let component: GerenciarClientesComponent;
  let fixture: ComponentFixture<GerenciarClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciarClientesComponent]
    });
    fixture = TestBed.createComponent(GerenciarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
