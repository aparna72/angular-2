import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ServicenameService } from './servicename.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FromGroup;

  constructor(fb: Frombuilder) {

    this.register = fb.group({
      'firstName' : [null,Validators.required],
      'lastName' : [null,Validators.required],
      'gender' : [null,Validators.required],

    })
   }

  ngOnInit() {


  }
 submitForm(form: any): void {
    console.log(value);
 }

}