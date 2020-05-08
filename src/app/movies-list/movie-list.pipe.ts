import { Pipe, PipeTransform } from '@angular/core';
import {Movies} from '../shared/movies';
@Pipe({
  name: 'orderBy'
})
export class MovieListPipe implements PipeTransform {

  transform(values:Movies[],args:string): any {

      if(args==='name'){
        return values.sort((a:Movies,b:Movies)=>{
          if(a.name>b.name){
            return -1;
          }else if(a.name==b.name){
            return 0;
          }else return 1;
        })
      }else if(args=='rating'){
        return values.sort((a:Movies,b:Movies)=>{
          if(a.rating>b.rating){
            return -1;
          }else if(a.rating==b.rating){
            return 0;
          }else return 1;
        })
      }
  }

}
