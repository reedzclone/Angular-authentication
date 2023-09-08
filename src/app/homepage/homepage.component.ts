import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { usermodel } from '../model/usermodel';
import { ApiService } from '../shared/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  
  //Pagination
  p = 1;
  itemsPerPage: number = 9;
  totalProfiles!: number; 
  responsive!:boolean;
  users: any[] = [];
  
  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => console.log(params)
    );
  }

  userData!:usermodel[];
  

  ngOnInit(): void {
    this.loadUser();
   }


  loadUser() {
    this.api.getAllUser().subscribe(res=>{
      console.log("res....", res)
      this.users = res;
    })
  }

  searchText: string = "";

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    this.totalProfiles = this.userData.length;
    this.p = 1
    this.updatePagination();
    // console.log(this.searchText);
    
  }

  updatePagination() {
    const startIndex = (this.p - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.totalProfiles);
    const numPages = Math.ceil(this.totalProfiles / this.itemsPerPage);

    // If the current page is beyond the last page with data, reset it to the last page with data
    if (this.p > numPages) {
      this.p = numPages;
    }

    // Slice the items to only include data for the current page
    this.users = this.users.slice(startIndex, endIndex);
  }

  
    //Pagination
  changePageSize(event:Event) {

  }
}
