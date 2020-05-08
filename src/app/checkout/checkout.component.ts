import { Component, OnInit } from '@angular/core';
import {SummaryService} from '../movie-details/summary.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  price:number;
  constructor(private summaryService:SummaryService) { }

  ngOnInit() {
    this.price=this.summaryService.bookingSummaryJson.Price;
  }

}
