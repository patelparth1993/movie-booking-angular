import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {HttpClientModule} from '@angular/common/http';
import {RatingComponent} from './movies-list/movie-rating.component';
import { MovieListPipe } from './movies-list/movie-list.pipe';
import { MovieListDirective } from './movies-list/movie-list.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    BookingSummaryComponent,
    CheckoutComponent,
    RatingComponent,
    MovieListPipe,
    MovieListDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
