import { Inject, Injectable,Input } from '@angular/core';

@Inject({
  providedIn: 'root'
})
export class Repo {
  constructor(
    public name: string,
    public description: string,
  ) {}
}

