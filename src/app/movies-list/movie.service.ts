import { Injectable } from "@angular/core";
import { Movies } from "../shared/movies";
import { Theatre } from "../shared/theatre";
import { Observable, throwError } from "rxjs";
import {
  HttpClient,
  HttpClientModule,
  HttpErrorResponse,
} from "@angular/common/http";
import { catchError, map, filter, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  movies: Movies[];
  theaters: Theatre[];
  constructor(private http: HttpClient) {}
  //Previous Code
  getMovieList(): Observable<Movies[]> {
    return this.http
      .get<Movies[]>("assets/Movies.json")
      .pipe(catchError(this.handleError));
  }

  getTheaterList(): Observable<Theatre[]> {
    /* SERVER CODE */
    // return this.http.get<Theatre[]>('http://localhost:1020/movies/'+sessionStorage.getItem('location'))
    // .pipe(
    //   tap(data=>{
    //    // console.log(data)

    //   }),
    //   catchError(this.handleError)
    // )

    //Existing working code
    return this.http
      .get<Theatre[]>("assets/Theatres.json")
      .pipe(catchError(this.handleError));
  }

  getMovie(mname: string): Observable<Movies> {
    return this.getMovieList().pipe(
      map((movies) => movies.filter((movie) => movie.name === mname)[0]),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    return throwError("server error in fetching movies list");
  }
}
