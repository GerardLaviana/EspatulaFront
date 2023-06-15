import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIngredientesComponent } from './admin-ingredientes.component';

describe('AdminIngredientesComponent', () => {
  let component: AdminIngredientesComponent;
  let fixture: ComponentFixture<AdminIngredientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminIngredientesComponent]
    });
    fixture = TestBed.createComponent(AdminIngredientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
