import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { Subscription }from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'git-search';
  username:string = 'karanimaina' 
  repositories: any[]= [];
  mySubscription: any;
  isloading = false;
  constructor(private usersService:UsersService){} 
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.getPublicRepositories();
  }



  getPublicRepositories(){

    // this.usersService.getUsers(this.username).subscribe((response)=>{
    //   // console.log(response)
    //   this.repositories= response
    // }
  // this.mySubscription.add(
  //    this.usersService.getUsers(this.username).subscribe((response)=>{
  //     // console.log(response)
  //     this.repositories= response;
  //     console.log(this.repositories.length);
  //    })
  // )

  this.usersService.getUsers(this.username).then((response)=>{
    console.log(response);
    this.repositories=  response;
  }).catch((error)=>{
    console.log(error)
  }).finally(()=> {
    console.log("finally")
    this.isloading= true;
  })

  }
    
}
    
