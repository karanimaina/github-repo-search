import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './users/user';
import { Repos } from './users/repo';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  userData: User;
  repoData: Repos;
  RepoData!: Repos;

  
  constructor(private http: HttpClient){
    this.userData = new User(
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      0,
      0,
      0,
      new Date(),
      ''
    ),
    
    this.repoData = new Repos(
      '',
      '',
      '',
      new Date()
    )
  }

 getUserDataRequest(getUserInfo: string){
   interface ApiResponse{
     name: string,
     login: string,
     avatar_url: string,
     html_url: string,
     location: string,
     bio: string,
     twitter_username: string,
     public_repos: number,
     followers: number,
     following: number,
     created_at: Date,
     company?: string,
   }
   let userPromise = new Promise<void>((resolve, reject)=>{
     this.http.get<ApiResponse>(environment.BASE_Url + '/' + getUserInfo + '??access_token=' + environment.apiKey).toPromise().then((Response)=>{

      this.userData = Response;
      resolve()
     },
     (error)=>{
       reject(error);
       console.log(error);
     })
     
   })
   return userPromise
 }

 getReposDataRequest(getUserInfo: string){
  interface ApiResponse{
    name: string,
    html_url: string,
    description: string,
    created_at: Date
  }
  let reposPromise = new Promise<void>((resolve, reject)=>{
    this.http.get<ApiResponse>(environment.BASE_Url + '/' + getUserInfo + '/repos?sort=created&direction=desc??access_token=' + environment.apiKey).toPromise().then((Response)=>{

     this.repoData = Response;
     console.log(this.repoData)
     resolve()
    },
    (error)=>{
      reject(error);
      console.log(error);
    })
    
  })
  return reposPromise
}

}