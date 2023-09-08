import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { usermodel } from '../model/usermodel';
import * as bcrypt from "bcryptjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  router: any;
  static getToken() {
    throw new Error('Method not implemented.');
  }
  usermodel: any;
  userData: any;

  apiUrl = "http://localhost:3000/api/users";
  signupUrl = "http://localhost:3000/api/signup";
  loginUrl = "http://localhost:3000/api/login";
  constructor(private http: HttpClient) { }
  


  // getAllUser():Observable<usermodel[]>{
  //   return this.http.get<usermodel[]>(this.apiUrl);
    
  // }

  getAllUser():Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createUser(userData:any){
    return this.http.post(this.signupUrl,userData);
  }

  //Storing the Token in local storage
  loggedIn() {
    return !!localStorage.getItem('token')
  }

  //Method to fetch the Token value
    getToken(){
      return localStorage.getItem('token')
    }

    loggedOut() {
      localStorage.removeItem('token')
      this.router.navigate(['signup']); 
    }

  

  // getProfile(id:number) {
  //   this.http.get<usermodel>(this.apiUrl + id);
  //   this.userData.find((profile: { id: number; }) => profile.id === id)
  // }

  getProfile(id: number): Observable<usermodel> {
    return this.http.get<usermodel>(`${this.apiUrl}/` + id)
      .pipe(catchError(this.handleError<usermodel>('getProfile')));
}


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }


 



  // getUser(id: string): Observable <usermodel[]> {
  //   return this.usermodel.find((profile: { id: string; }) => profile.id === id);
  // }
}
