// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { UserComponent } from './user/user.component';
// import { ReposComponent } from './repos/repos.component';

// const routes: Routes = [
//   {
//     path: '',
//     pathMatch: 'full',
//     redirectTo: 'home'
//   },
//   { path: 'home', component: HomeComponent},
//   { path: 'user', component: UserComponent},
//   { path: 'repos', component: ReposComponent},
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }