import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  PATH: string = 'https://tiptoptennisbackend.azurewebsites.net/';

  @Input()
  isLogged: boolean;
  
  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) { 
    if (this.tokenGetter() == '')
      this.isLogged = false;
    else 
      this.isLogged = true;
  }

  tokenGetter(){
    return localStorage.getItem('token');
  };

  Login(form: NgForm) {
    const credentials = JSON.stringify(form.value);
    this.http.post(this.PATH + 'api/Authentication/Login', credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      this.isLogged = true;
      const token = (<any>response).token;
      localStorage.setItem('token', token);
      this.router.navigate(['edit']);
    }, err => {
      alert("Login fallito")
    });
  }

  logOut() {
    this.isLogged = false;
    this.router.navigate(['login']);
    return localStorage.removeItem('token');
  }
}
