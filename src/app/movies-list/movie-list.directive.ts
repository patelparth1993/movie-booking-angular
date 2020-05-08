import { Directive } from '@angular/core';
import {Renderer2,ElementRef} from '@angular/core';

@Directive({
  selector: '[appMovieList]',
  exportAs: "highlightBG"
})
export class MovieListDirective {

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

  onMouseEnter(){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','yellow');
  }

  onMouseLeave(){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
  }

  theatreBold(){
    this.renderer.setStyle(this.elementRef.nativeElement,'font-weight','bold');
  }

  theatreNormal(){
    this.renderer.setStyle(this.elementRef.nativeElement,'font-weight','normal');
  }

}
