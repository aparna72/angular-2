import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FromGroup;

  constructor(fb: Frombuilder) {

    this.register = fb.group({
      'firstName' : '',
      'lastName' : '',
      'gender' : 'Female',
      
    })
   }

  ngOnInit() {


  }
 submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
 }

}