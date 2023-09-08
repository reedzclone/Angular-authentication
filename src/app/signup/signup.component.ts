import { Component, Input, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl, NgModel } from '@angular/forms';
import { HttpClient } from  '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../shared/api.service';
import { PasswordService } from '../password.service';
import * as bcrypt from "bcryptjs";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnChanges, OnInit{

  /* @Input() password:string ='' */
  // loginForm: FormGroup;
  cancelled: boolean = false;
  marked: boolean = true;
  showError: boolean = false;
  minimum: boolean = false;
  specialChar: boolean = false;
  upperLetter: boolean = false;
  hasANumber: boolean = false;
  userName: string = '';
  email: string = '';
  password: string = ''
  signupForm: any;
  emailRegex: string = "^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$";

  
  signupUserData = {};
  

  constructor(private FormBuilder: FormBuilder, private http: HttpClient, private router: Router, private toastr: ToastrService, private api: ApiService, private passwordService: PasswordService) {
  }

  

  get registrationFormControl () {
    return this.signupForm.controls;
  }
  
  
  

   ngOnInit(): void {
    this.signupForm = this.FormBuilder.group({
      
      userName: this.FormBuilder.control('',[Validators.required,Validators.minLength(5)]),
      email: this.FormBuilder.control('',[ Validators.required,
        Validators.pattern(this.emailRegex)]),
        password:this.FormBuilder.control('',Validators.required),
    })

    
   }

    
  //  signupUser() {
  //    const userData = { name: this.userName, email: this.email, password: this.password};
  //    this.http.post<any>("http://localhost:3000/api/signup",userData)
  //    .subscribe((res) => {
  //     console.log(res.message);
  //    },
  //    (error) =>{
  //     console.error("Error signing up:", error);
      
  //    })
     
  //  }
   

  onSubmit(){

    // if(this.signupForm.valid){
    //   this.api.createUser(this.signupForm.value).subscribe(Response=>{
    //     this.toastr.success('signup', "Signup Successfully");
    //     this.signupForm.reset();
    //     this.router.navigate(['login']);
    //   },err=> {
    //     this.toastr.error('signup', "Something Went Wrong");
    //   })
    // }
    this.http.post<any>("http://localhost:3000/api/signup",this.signupForm.value)
    .subscribe(res=>{
      localStorage.setItem('token', res.token);
      this.toastr.success('signup', "Signup Successfully", {timeOut: 3000})
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, err=> {
      alert("something went wrong")
    })



    if(this.signupForm.valid) {
      console.log(this.signupForm.value)
    } else {
      alert("Invalid signupForm"); 
    } 
  }

  ngOnChanges(element: SimpleChanges) {
    console.log("ngOnChanges called");  
  }


  

   

  
getValue( password: any) {  
}

  
  onKey(event: any){
  }


  onKeyPress(event: any) {
    this.minimum = false;
    this.specialChar = false;
    this.upperLetter = false;
    this.hasANumber = false;
    console.log(event);
    this.showError = true;


    this.evalMinimum(event);
    this.character(event);
    this.hasUpperCase(event);
    this.hasNumber(event);


  }

  evalMinimum(data:string) {
    if(data.length >= 8) {
      this.minimum = true;
    }
  }

  character(data: string) {
    let specialChar: any = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(specialChar.test(data)) {
      this.specialChar = true;
    }
  }

  hasUpperCase(str: string) {
    if(str !== str.toLowerCase()) {
      this.upperLetter = true;
    }
}

      hasNumber(data: string) {
        let numb = /\d/
        if(numb.test(data)) {
          this.hasANumber = true
        }
        }

}
  function ngOnInit() {
    throw new Error('Function not implemented.');
  }

