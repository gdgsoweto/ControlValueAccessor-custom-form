import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServiceRequestRoutingModule } from './service-request-routing.module';
import { ServiceRequestComponent } from './service-request.component';
import { CategoriesFormComponentComponent } from './categories-form-component/categories-form-component.component';


@NgModule({
  declarations: [
    ServiceRequestComponent,
    CategoriesFormComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceRequestRoutingModule
  ]
})
export class ServiceRequestModule { }
