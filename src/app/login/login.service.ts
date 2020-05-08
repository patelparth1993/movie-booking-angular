import { Injectable } from '@angular/core';
import {Users} from './user';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, filter,map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  allUsers:Users[];
  constructor(private http:HttpClient) { }

  //get all users
  getAllUsers():Observable<Users[]>{
    return this.http.get<Users[]>('assets/Registrations.json')
    .pipe(
      catchError(this.handleError)
    );
  }
  //get user and verify
  getUser(name:string,password:string):Observable<any>{
    return this.getAllUsers().pipe(
      map((users)=>users.filter((user)=>{
        if(user.username===name && user.password===password){
          return user;
        }
      })),catchError(this.handleError)
    )
  }

  handleError(err:HttpErrorResponse){
    console.log('invalid cred 2');
    return throwError(err.message+ ' server error');
    
  }
}
