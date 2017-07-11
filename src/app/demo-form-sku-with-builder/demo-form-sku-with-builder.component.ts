import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku-with-builder',
  templateUrl: './demo-form-sku-with-builder.component.html',
  styleUrls: ['./demo-form-sku-with-builder.component.css']
})
export class DemoFormSkuWithBuilderComponent implements OnInit {

	myForm: FormGroup;
  constructor(fb: FormBuilder) { 
  	this.myForm = fb.group({
  		'sku': ['ABC123'],
  		'name': 'Luis Reyes'
  	});
  }

  ngOnInit() {
  }

   onSubmit(form: any): void {
  	console.log('El dato: ', form);
  }

}
