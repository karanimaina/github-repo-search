import { Component, OnInit,Input } from '@angular/core';
import { Repo } from '../services/repo.service';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  searchUsers = true;
  repo!:Repo ;
  reponame!: string;
  @Input()
  name!: string;
  constructor(private repoService: UsersService) {}

  search(reponame: any) {
    this.repoService.getRepoDetails(reponame).then(
      (results: any) => {
        this.repo = this.repoService.newRepo;
        console.log(results);
      },
      (error: any) => {
       alert(error);
      }
    );
  }

  ngOnInit() {}
  
}

