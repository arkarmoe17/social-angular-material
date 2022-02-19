import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(
    private jwtHelper: JwtHelperService,
    private authService: AuthService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = localStorage.getItem('access_token');
    console.log(userToken);
    if(userToken === null) {
      const modifiedReq = req.clone({ 
        headers: req.headers.set('Authorization', `null`),
      });
      return next.handle(modifiedReq);
    } else {
      if(this.jwtHelper.isTokenExpired(userToken)) {
        // this.authService.refresh();
        const userTokenAfterExpire = localStorage.getItem('refresh_token');
        const modifiedReq = req.clone({ 
          headers: req.headers.set('Authorization', `Bearer ${userTokenAfterExpire}`),
        });
        return next.handle(modifiedReq);
      } else {
        const modifiedReq = req.clone({ 
          headers: req.headers.set('Authorization', `Bearer ${userToken}`),
        });
        return next.handle(modifiedReq);
      }
      
      
    }
    
  }
}
