import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiceRequestComponent } from './service-request.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceRequestComponent
  },
  {
    path: 'service-request',
    component: ServiceRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRequestRoutingModule { }
