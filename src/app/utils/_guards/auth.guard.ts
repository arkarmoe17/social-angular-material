import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from "../../services/auth.service";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    jwtHelper = new JwtHelperService();

    canActivate(next: ActivatedRouteSnapshot): boolean {
        if(this.authService.loggedIn()) {
            console.log("auth guard is already logged in.");
            return true;
        } else{
            return this.authService.refresh();
        }
       
    }
}