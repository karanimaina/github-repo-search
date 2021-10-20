import { Repos } from '../users/repo';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data-service.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  @ViewChild('e')
  searchGithubReposForm!: NgForm;
  home!: string;
  userInfo: any ;

  showRepos = false;

  searchGithubRepos(){
    this.home=this.searchGithubReposForm.value.search;
    console.log(this.home);
    
    this.requestRepos.getReposDataRequest(this.home).then(
      (Response)=>{
        this.userInfo=this.requestRepos.repoData;
        console.log(this.userInfo);
      },
      (error)=>{
        console.log(error);
      }
    );
    this.showRepos=true;
  }
  constructor(private requestRepos:DataService) {}



  ngOnInit(): void {
  }

}
