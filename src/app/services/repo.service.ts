import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepoService  {

  constructor(public name: string,
    public html_url: string,
    public description: string,
    
    public language: string
    ) { }
}
