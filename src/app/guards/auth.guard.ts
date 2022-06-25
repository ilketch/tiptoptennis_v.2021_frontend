import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private jwtHelper: JwtHelperService, private router: Router, private authService: AuthService) { }

  canActivate(): boolean {
    if (this.authService.isLogged === true) {
      return true;
    }
    alert('Autenticazione richiesta!');
    this.router.navigate(['login']);
    return false;
  }
  
}
