
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { usermodel } from '../model/usermodel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  id:any;
  fullMode: boolean | undefined;
  addMode: boolean = false;
  constructor(private route: ActivatedRoute, private api: ApiService ) {
  }

  profile: any;

  
  ngOnInit(): void{
    // this.profile = this.api. getProfile(this.id);
    this.route.data.forEach((data:any) => {
      this.profile = data['profile'];
      this.addMode = false;

  });

  console.log(this.profile);
  
    
    }

    addSession() {
      this.addMode = true;
  }

  }


  