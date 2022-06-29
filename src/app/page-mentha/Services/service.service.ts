import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

public numero:string='uno';

// Fuction the Search's Component Nav
  search(){
    console.log('Hiciste click')
  }


}
