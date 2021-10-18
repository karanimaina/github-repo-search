import { Injectable } from '@angular/core';
import  { HttpClient, HttpParams  }from '@angular/common/http'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  newRepo: Repo;
  apiKey: string = environment.apiKey;
   private baseUrl=environment.BASE_Url
   private token = environment.gitAccessToken
  constructor(private httpClient:HttpClient) { }
  // getUsers(username: string): Observable<any[]> {
  //   // let param = new HttpParams();
  //   // param = param.append('username','karanimaina');
  //   const endpoint = 'users'
  //   return this.httpClient.get<any[]>(`${this.baseUrl}/${endpoint}/${username}/repos`,{
  //     // params:param

  //   });
  // }
  getUsers(username: string){
    const endpoint = 'users'
  return this.httpClient.get<any[]>(`${this.baseUrl}/${endpoint}/${username}?access_token= +${this.token}`,{
    //     // params:param
  }).toPromise()
}}
