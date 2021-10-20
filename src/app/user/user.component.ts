import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data-service.service';
import { User } from '../users/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild('k')
  searchGithubUserForm!: NgForm;
  home!: string;
  userInfo!: User;

  showUser = false;

  searchGithubUser(){
    this.home=this.searchGithubUserForm.value.search;
    console.log(this.home);
    
    this.requestUser.getUserDataRequest(this.home).then(
      (Response)=>{
        this.userInfo=this.requestUser.userData;
        console.log(this.userInfo);
        
        this.showUser=true;
      },
      (error)=>{
        console.log(error);
      }
    );
    
  }
  constructor(private requestUser:DataService) {}



  ngOnInit(): void {
  }

}

