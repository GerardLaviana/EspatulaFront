import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaFormComponent } from './receta-form.component';

describe('RecetaFormComponent', () => {
  let component: RecetaFormComponent;
  let fixture: ComponentFixture<RecetaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecetaFormComponent]
    });
    fixture = TestBed.createComponent(RecetaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
