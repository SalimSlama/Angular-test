import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireTestComponent } from './formulaire-test.component';

describe('FormulaireTestComponent', () => {
  let component: FormulaireTestComponent;
  let fixture: ComponentFixture<FormulaireTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
