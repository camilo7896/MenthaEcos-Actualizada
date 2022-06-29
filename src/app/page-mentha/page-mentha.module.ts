import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';



@NgModule({
  declarations: [
MainPageComponent,
HomeComponent,
NavComponent,
FooterComponent,
AboutComponent,
UbicacionComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class PageMenthaModule {

  // Imagenes

 

 }
