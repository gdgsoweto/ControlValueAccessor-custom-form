import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.scss']
})
export class ServiceRequestComponent implements OnInit {

  programForm: any = FormGroup;

  packages: any = [
    { id: 1, name: 'Silver' },
    { id: 2, name: 'Bronze' },
    { id: 3, name: 'Platinum' },
  ]

  payments: any = [
    { id: 1, name: 'Cash' },
    { id: 2, name: 'Paypal' },
    { id: 3, name: 'Visa/Master Card' },
  ]

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      name: ['', Validators.required],
      contact: ['', Validators.required],
      category: ['', Validators.required],
      package: [0, Validators.required],
      serviceDate: ['', Validators.required],
      payment: [0, Validators.required],
    });
  }

  submitRequest() {
    console.log(this.programForm.value);
  }

}
