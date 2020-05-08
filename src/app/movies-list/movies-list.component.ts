import { Component, OnInit } from "@angular/core";
import { Movies } from "../shared/movies";
import { MovieService } from "./movie.service";
import { Router } from "@angular/router";
import { Theatre } from "../shared/theatre";

@Component({
  selector: "app-movies-list",
  templateUrl: "./movies-list.component.html",
  styleUrls: ["./movies-list.component.css"],
})
export class MoviesListComponent implements OnInit {
  imageWidth = 200;
  imageHeight = 140;
  imageMargin = 1;
  sortByOption = "rating";
  // filterByOption='';
  MoviesList: Movies[];
  TheaterList: Theatre[];
  errorMsg = "";
  range = [1, 2, 3, 4, 5];
  searchtext: string;
  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    this.getMoviesList();
    this.getTheaterList();
  }

  getMoviesList() {
    this.movieService.getMovieList().subscribe(
      (movies) => {
        this.MoviesList = movies;
        this.movieService.movies = movies;
      },
      (error) => {
        this.errorMsg = error;
        console.log(this.errorMsg);
      }
    );
  }

  getTheaterList() {
    this.movieService.getTheaterList().subscribe(
      (theaters) => {
        this.TheaterList = theaters.filter(
          (theater) => theater.City === sessionStorage.getItem("location")
        );
        this.movieService.theaters = theaters;
        //console.log(this.movieService.theaters);
        let movies = [];
        let movieSet = new Set();
        for (let i = 0; i < this.TheaterList.length; i++) {
          //  console.log(this.TheaterList[i].theaterName+"\n")
          //console.log(this.TheaterList[i]);
          if (!movieSet.has(this.TheaterList[i].MovieName)) {
            movieSet.add(this.TheaterList[i]);
            movies.push(this.TheaterList[i]);
          }

          /* SERVER CODE */
          // this.TheaterList[i].movie.map((movie) => {
          //   if (!movieSet.has(movie.name)) {
          //     movieSet.add(movie.name);
          //     movies.push(movie);
          //   }
          // });
        }

        //  this.MoviesList = movies;
        // this.movieService.movies = movies;
        // console.log(movies);
      },
      (error) => {
        this.errorMsg = error;
        console.log(this.errorMsg);
      }
    );
  }

  book(movieName: string) {
    console.log(movieName + " " + sessionStorage.getItem("location"));
    this.router.navigate([
      "movie/",
      movieName,
      sessionStorage.getItem("location"),
    ]);
  }

  searchMovie() {
    this.MoviesList = this.movieService.movies;
    if (this.searchtext.length > 0) {
      this.MoviesList = this.MoviesList.filter((movie) => {
        if (movie.name.toLowerCase().indexOf(this.searchtext) !== -1) {
          return movie;
        }
      });
    }
  }

  filterBy(args: string) {
    console.log("inside filter by" + args);
    this.MoviesList = this.movieService.movies;
    if (args.length > 0) {
      this.MoviesList = this.MoviesList.filter(
        (movie) => movie.language.toLowerCase() == args.toLowerCase()
      );
    }
  }
}
