import { Component, forwardRef, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CATEGORY_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CategoriesFormComponentComponent),
  multi: true,
};

@Component({
  selector: 'app-categories-form-component',
  templateUrl: './categories-form-component.component.html',
  styleUrls: ['./categories-form-component.component.scss'],
  providers: [CATEGORY_CONTROL_VALUE_ACCESSOR],
})
export class CategoriesFormComponentComponent implements ControlValueAccessor {

  categories = [
    { id: 'mini', name: 'Mini Size', image: 'https://imgd.aeplcdn.com/0x0/cw/ec/34290/Mini-Countryman-Exterior-127009.jpg' },
    { id: 'suv', name: 'SUV', image: 'https://imgd.aeplcdn.com/0x0/cw/ec/34290/Mini-Countryman-Exterior-127009.jpg' },
    { id: 'mini-van', name: 'Mini Van', image: 'https://imgd.aeplcdn.com/0x0/cw/ec/34290/Mini-Countryman-Exterior-127009.jpg' },
    { id: 'cruiser', name: 'Cruiser', image: 'https://imgd.aeplcdn.com/0x0/cw/ec/34290/Mini-Countryman-Exterior-127009.jpg' },
  ];

  selected: string = this.categories[0].id;
  disabled: boolean = false;
  private onTouched!: Function;
  private onChanged!: Function;

  constructor() { }

  ngOnInit(): void {
  }

  selectCategory(id: string) {
    this.onTouched();
    this.selected = id;
    this.onChanged(id);

    console.log(id);
  }

  // this function is called by the Forms API to update the value of the element.
  writeValue(value: string): void {
    this.selected = value;
  }

  // we get access to a function in the argument that can be saved to a local variable. 
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  // we get access to another function that can be used to update the state of the form to touched 
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  // this function will be called by the forms API when the disabled state is changed. 
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

}
