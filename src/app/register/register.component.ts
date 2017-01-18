import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {


  }
 submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
 }

}