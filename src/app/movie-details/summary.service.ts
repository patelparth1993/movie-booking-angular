import { Injectable } from '@angular/core';
import {Summary} from './summary-interface';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  bookingSummaryJson:Summary;
  constructor() { }

  getBookingSummary(){
    return this.bookingSummaryJson;
  }
}
