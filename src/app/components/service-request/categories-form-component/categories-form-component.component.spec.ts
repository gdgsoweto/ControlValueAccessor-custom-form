import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesFormComponentComponent } from './categories-form-component.component';

describe('CategoriesFormComponentComponent', () => {
  let component: CategoriesFormComponentComponent;
  let fixture: ComponentFixture<CategoriesFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
