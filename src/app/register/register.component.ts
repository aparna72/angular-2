import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ServicenameService } from './servicename.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
constructor(fb:FromBuilder,public ServicenameService:ServicenameService ) {
      this.register = fb.group({
      'firstName' : [null,Validators.required],
      'lastName' : [null,Validators.required],
      'gender' : [null,Validators.required],

    })
    
  }
  Countries:Array<any>
  ngOnInit(){
    this.ServicenameService.getCountriesfromapi().then(response=>(
      this.countries=response.Countries;
      console.log(this.Countries));
  }

register={

  }
  registerForm:FormGroup
 registerUser(){
   console.log(this.register);
 }
 submitForm(form:any){
   console.log(form);
 }
}


    

