import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl, NgModel } from '@angular/forms';
import { HttpClient } from  '@angular/common/http';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import * as bcrypt from "bcryptjs";
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginForm: any

userName: string = '';
email: string = '';
password: string = '';
  bycrpt: any;





constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private toastr: ToastrService, private api: ApiService) {
  this.loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required
      
    ])
  })
  
}

get registrationFormControl () {
  return this.loginForm.controls;
}



 ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    email:[''],
    password:['']
  })

 
 }


 onLogin(){
  this.http.post<any>("http://localhost:3000/api/login", this.loginForm.value)
  .subscribe(res=>{
    console.log("user...", res, this.loginForm.value.email, this.loginForm.value.password);
    localStorage.setItem('token', res.token);
    this.toastr.success('Login', "Login Successfully");
  this.loginForm.reset();
  // window.localStorage.setItem('isAuthenticated', 'true');
  this.router.navigate(['home']);
    
  }, err=>{this.toastr.error('login', "Wrong Credentials")})

}

}

// onLogin(){
//   this.http.post<any>("http://localhost:3000/api/login", this.loginForm.value)
//   .subscribe(res=>{
//     console.log("user...", res, this.loginForm.value.email, this.loginForm.value.password);
//     const user = res.findOne((data: any)=>{
//       return (data.email == this.loginForm.value.email) && (data.password == this.loginForm.value.password);
//     });
//     if(user){
//       // alert('login successful');
//       this.toastr.success('Login', "Login Successfully");
//       this.loginForm.reset();
//       window.localStorage.setItem('isAuthenticated', 'true');
//       this.router.navigate(['home']);
//     }else {
//       this.toastr.error('Login', "Wrong Credentials");
//     }
//   }, err=>{alert(err)})

// }

// }
