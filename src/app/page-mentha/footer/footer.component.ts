import { Component, OnInit } from '@angular/core';

interface contact{
  numero:number,
  nombre:string
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public image:string='../assets/mentha-3.png';

  public nuevo:contact={
    nombre:'',
    numero:0
  }

  subscribe(){
    console.log(this.nuevo)
this.nuevo={
  nombre:'',
  numero:0
}
  }
}
