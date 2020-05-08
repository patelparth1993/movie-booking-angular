import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MovieService } from "../movies-list/movie.service";
import { Movies } from "../shared/movies";
import { Theatre } from "../shared/theatre";
import { TheatresService } from "./theatres.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SummaryService } from "./summary.service";
import { Summary } from "./summary-interface";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.css"],
})
export class MovieDetailsComponent implements OnInit {
  movieName: string = "";
  location = "";
  myMovie: Movies;
  theatreList: Theatre[] = [];
  selectedTheatre: Theatre[] = [];
  imageWidth = 300;
  imageHeight = 420;
  imageMargin = 1;
  movieForm: FormGroup;
  bookingSummaryJSON: Summary;
  movieRate: number = 0;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private theatreService: TheatresService,
    private formBuilder: FormBuilder,
    private summaryService: SummaryService,
    private router: Router
  ) {
    this.movieForm = this.formBuilder.group({
      theatre: [""],
      showDetails: this.formBuilder.group({
        date: ["", Validators.required],
        showTime: ["", Validators.required],
        noOfSeats: [
          "",
          [Validators.required, Validators.min(2), Validators.max(10)],
        ],
      }),
    });
  }

  ngOnInit() {
    this.movieName = this.route.snapshot.params.movieName;
    this.location = this.route.snapshot.params.location;

    this.movieService.getMovie(this.movieName).subscribe(
      (movie) => {
        this.myMovie = movie;

        this.movieService.theaters.map((theater) => {
          //console.log(theater);
          // for(let i=0;i<theater.movie.length;i++){
          if (
            theater.MovieName === this.myMovie.name &&
            theater.City.toLocaleLowerCase() ===
              sessionStorage.getItem("location").toLocaleLowerCase()
          ) {
            this.theatreList.push(theater);
            //break;
          }
          //}
        });
      },
      (error) => {
        console.log("Error in fetching movie details");
      }
    );

    /*
    this.theatreService.getTheatresList(this.location,this.movieName)
    .subscribe((theatres)=>{
      this.theatreList=theatres;
      //console.log(this.theatreList);
    },
    (error)=>console.log(error))
    */
  }

  selectTheatre(selected: string) {
    this.selectedTheatre = this.theatreList.filter(
      (theater) => theater.theaterName === selected
    );
    console.log("enter show details :" + this.selectedTheatre);

    //Calculate movie rate from selected theatre and movieName using list of theatres

    // let th:Theatre[]=this.theatreList.map((theaters)=>{
    //   //console.log(theaters.theaterName+"-->"+theaters..movie.name);
    //   if(theaters.theaterName.toLowerCase()==this.selectedTheatre.toLowerCase()
    //   && theaters.MovieName.toLowerCase()==this.movieName.toLowerCase()){
    //     //console.log(theaters.price);
    //     return theaters;
    //   }
    // });
    // this.movieRate=th[0].price;
    //   console.log( this.movieRate);
    //   //console.log(this.movieRate);
    // //this.movieRate=theater;
  }

  bookSummary() {
    //create bookingSummaryJSON
    console.log(this.selectedTheatre);
    this.bookingSummaryJSON = {
      TheatreName: this.selectedTheatre[0].theaterName,
      Location: this.location,
      SeatsBooked: this.movieForm.get("showDetails").get("noOfSeats").value,
      MovieName: this.movieName,
      Price:
        this.selectedTheatre[0].price *
        <any>this.movieForm.get("showDetails").get("noOfSeats").value,
      ShowDate: this.movieForm.get("showDetails").get("date").value,
      ShowTiming: this.movieForm.get("showDetails").get("showTime").value,
    };

    this.summaryService.bookingSummaryJson = this.bookingSummaryJSON;
    console.log(this.summaryService.bookingSummaryJson.Price);
    this.router.navigate(["bookingsummary"]);
  }

  goBack() {
    window.history.back();
  }
}
