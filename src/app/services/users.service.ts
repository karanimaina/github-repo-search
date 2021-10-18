import { Injectable } from '@angular/core';
import  { HttpClient, HttpParams  }from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Repo } from './repo.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  [x: string]: any;
 
  newRepo!: Repo;
  apiKey: string = environment.apiKey;
   private baseUrl=environment.BASE_Url
   constructor(private http: HttpClient) {
    this.newRepo = new Repo('', '');
  }

  // getUsers(username: string): Observable<any[]> {
  //   // let param = new HttpParams();
  //   // param = param.append('username','karanimaina');
  //   const endpoint = 'users'
  //   return this.httpClient.get<any[]>(`${this.baseUrl}/${endpoint}/${username}/repos`,{
  //     // params:param

  //   });
  // }
//   getUsers(username: string){
//     const endpoint = 'users'
//   return this.httpClient.get<any[]>(`${this.baseUrl}/${endpoint}/${username}?access_token= +${this.token}`,{
//     //     // params:param
//   }).toPromise()
// }}



// 




 
  
  

  // getUserDetail(username: string) {
  //   interface Profile {
     
  getRepoDetails(username:any) {
    interface Repos {
      name: string;
      html_url: string;
      description: string;
      language: string;
      created_at: Date;
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<Repos>(
          'https://api.github.com/users/' +
            username +
            '/repos?access_token=' +
            environment.apiKey
        )
        .toPromise()
        .then(
          (results) => {
            this.newRepo = results;
            resolve();
          },
          (error) => {
            console.log(error);
            reject();
          }
        );
    });
    return promise;
  }
}



