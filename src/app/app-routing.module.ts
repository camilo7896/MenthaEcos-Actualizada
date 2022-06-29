import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page-mentha/home/home.component';
import { NavComponent } from './page-mentha/nav/nav.component';
import { AboutComponent } from './page-mentha/about/about.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'nav',
    component:NavComponent,
  },
  {
    path:'about',
    component:AboutComponent
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
