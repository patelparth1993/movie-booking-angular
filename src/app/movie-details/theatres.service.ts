import { Injectable } from '@angular/core';
import {Theatre} from '../shared/theatre';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {HttpClient, HttpClientModule, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TheatresService {
  theatresList:Theatre[];

  constructor(private http:HttpClient) { }

  // getTheatresList(location:string,movie:string):Observable<Theatre[]>{
  //   return this.http.get<Theatre[]>('assets/Theatres.json').pipe(
  //     map((theatres)=>theatres.filter((theatre)=>{
  //       //return theatre;
  //       if(theatre.MovieName.toLowerCase()==movie.toLowerCase() && theatre.City.toLowerCase()==location.toLowerCase()){
  //         return theatre;
  //       }
  //     })),
  //     catchError(this.handleError)
  //   )
  // }

  handleError(err:HttpErrorResponse){
    return throwError("server error in fetching theatres list "+err);
  }
}
