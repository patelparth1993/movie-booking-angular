import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MoviesListComponent} from './movies-list/movies-list.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {BookingSummaryComponent} from './booking-summary/booking-summary.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent,pathMatch:"full"},
  {path:'movies',component:MoviesListComponent},
  {path:'movie/:movieName/:location',component:MovieDetailsComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'bookingsummary',component:BookingSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
