import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page-mentha/home/home.component'
import { NavComponent } from './page-mentha/nav/nav.component';
import { MujerComponent } from './page-mentha/mujer/mujer.component';
import { MascotasComponent } from './page-mentha/mascotas/mascotas.component';
import { TeomaComponent } from './page-mentha/teoma/teoma.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'nav',
    component:NavComponent,
  },
  {
    path:'mujer',
    component:MujerComponent
  },
  {
    path:'mascotas',
    component:MascotasComponent,
  },
  {
    path:'teoma',
    component:TeomaComponent,
  },
  {
    path:'**',
    component:HomeComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
