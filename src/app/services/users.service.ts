import { Injectable } from '@angular/core';
import  { HttpClient, HttpParams  }from '@angular/common/http'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
   private baseUrl=environment.BASE_Url

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
  return this.httpClient.get<any[]>(`${this.baseUrl}/${endpoint}/${username}/repos`,{
    //     // params:param
  }).toPromise()
}}
