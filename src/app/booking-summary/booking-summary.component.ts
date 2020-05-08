import { Component, OnInit } from "@angular/core";
import { SummaryService } from "../movie-details/summary.service";
import { Summary } from "../movie-details/summary-interface";
import { Router } from "@angular/router";

@Component({
  selector: "app-booking-summary",
  templateUrl: "./booking-summary.component.html",
  styleUrls: ["./booking-summary.component.css"],
})
export class BookingSummaryComponent implements OnInit {
  bookingSummary: Summary;
  constructor(private summaryService: SummaryService, private router: Router) {}

  ngOnInit() {
    this.bookingSummary = this.summaryService.getBookingSummary();
    console.log("Booking summary ");
    console.log(this.bookingSummary);
  }

  goBack() {
    window.history.back();
  }

  checkout() {
    this.router.navigate(["checkout"]);
  }
}
