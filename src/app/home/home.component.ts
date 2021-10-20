import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';
import { User } from '../users/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username!: User;
  repository: any;

  constructor(private requestUser:DataService) {}

    getUser(githubUsername: string){
      this.requestUser.getUserDataRequest(githubUsername).then(
        (Response)=>{
          this.username=this.requestUser.userData;
          console.log(this.username)
        },
        (error)=>{
          console.log(error);
        }
      )
    }
  

  getRepos(githubUsername: string){
    this.requestUser.getReposDataRequest(githubUsername).then(
      (Response)=>{
        this.repository=this.requestUser.repoData;
      },
      (error)=>{
        console.log(error);
      }
    )
  }



  ngOnInit(): void {
    this.getUser("karanimaina")
    this.getRepos("karanimaina")

  }
  
}
 

