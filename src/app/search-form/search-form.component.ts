import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
 
  username!: string;
  @Output() searchOutput =new EventEmitter<any>();
  

  getPublicRepositories(){
  }


  constructor() { }



  ngOnInit(): void {
  }
getUser(){
  this.searchOutput.emit(this.username);
  this.username="";

}
}
