import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'git-search';
  username:string = 'karanimaina'
  repositories: any[]= [];
  constructor(private usersService:UsersService){} 
  ngOnInit(): void {
    this.getPublicRepositories();
  }



  getPublicRepositories(){
    this.usersService.getUsers(this.username).subscribe((response)=>{
      // console.log(response)
      this.repositories= response
    }
  

  
    )}}
