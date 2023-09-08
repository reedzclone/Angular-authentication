import { Component, inject  } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './shared/api.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  apiService = inject(ApiService);

  constructor(private router: Router) {
    
  }

  isAuthenticated: any;

  ngOnInit() {
    if(localStorage.getItem('isAuthenticated') === 'true') {
      this.isAuthenticated = true;
    }else {
      this.isAuthenticated = false
    }
  }


  // checkout() {
  //   window.localStorage.setItem('isAuthenticated', 'false');
  //   this.router.navigate(['login']);
  // }
 
    

 }

