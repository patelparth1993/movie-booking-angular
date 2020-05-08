import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  userAuthenticate:boolean=false;
  errorMsg:string=''
  constructor(private formBuilder:FormBuilder,private loginService:LoginService,
    private route:Router) { 
    this.loginForm=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
    })
  }

  ngOnInit() {
    if(sessionStorage.getItem('location')==null){
      sessionStorage.setItem('location','banglore');
    }
  }

  Login(){
    console.log('user authentification');
    this.errorMsg='';
    let uname=this.loginForm.get('username').value;
    let password=this.loginForm.get('password').value;
    
    this.loginService.getUser(uname,password)
    .subscribe((data)=>{
      console.log(data);
      if(data.length!==0){
        this.userAuthenticate=true;
        sessionStorage.setItem('username',uname);
        //navigate to movie list component
        this.route.navigate(['movies']);
      }else{
        this.userAuthenticate=false;
        this.errorMsg='Invalid Credentials';
      }
      
    },(error)=>{
      this.errorMsg=error;
    })
  }
}
