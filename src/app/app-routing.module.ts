import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GetweatherComponent } from './getweather/getweather.component';

const routes: Routes = [
  {path:'', component:GetweatherComponent},
  {path:'about',component:AboutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
