import { Component,EventEmitter,Input, Output, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor() {

  }
  ngOnInit(): void {
    
  }
  
  enteredSearchValue: string = "";
  @Output()
  //Creating a custom Event
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
