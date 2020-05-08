import {Component, Input} from '@angular/core';

@Component({
    selector:'movie-rating',
    template:`
            <span *ngFor="let r of range;let i=index">
                <i class="fa fa-star" [ngClass]="i<rate? 'checked':''"></i>
            </span>
    `,
    styles:[
        '.checked{color:yellow}'
    ]
})
export class RatingComponent{
    range:Array<number>=[1,2,3,4,5];
    @Input() rate:number;

    @Input() cnum(rate:number){
        console.log(this.cnum);
    }
}

