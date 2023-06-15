import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecetasComponent } from './admin-recetas.component';

describe('AdminRecetasComponent', () => {
  let component: AdminRecetasComponent;
  let fixture: ComponentFixture<AdminRecetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRecetasComponent]
    });
    fixture = TestBed.createComponent(AdminRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
