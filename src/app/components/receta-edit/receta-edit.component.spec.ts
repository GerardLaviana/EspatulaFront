import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaEditComponent } from './receta-edit.component';

describe('RecetaEditComponent', () => {
  let component: RecetaEditComponent;
  let fixture: ComponentFixture<RecetaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecetaEditComponent]
    });
    fixture = TestBed.createComponent(RecetaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
