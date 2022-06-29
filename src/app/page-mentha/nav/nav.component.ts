import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public servi:ServiceService) {}


  ngOnInit(): void {
  this.servi.search();
  }
  public image:string='../assets/mentha-3.png';

  public title:string='Mentha Ecos'
}
