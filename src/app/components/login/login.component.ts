import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AppComponent } from '../app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  [x: string]: any;

  registerForm: FormGroup;
  
  home: any;

  username: string;
  password: string;

  constructor(private authService: AuthService, private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.appComponent.navbarVisible = false;
  }

  SignIn(form: NgForm): void {
    this.authService.Login(form);
  }

}
