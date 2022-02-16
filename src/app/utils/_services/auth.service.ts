import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerLogin } from '../_entities/customer/customer-login';
import { CustomerRegister } from '../_entities/customer/customer-register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //URL 
  baseUrl = environment.base_url;
  loginUrl = this.baseUrl +'/doLogin';

  jwtHelper = new JwtHelperService();
  decodedToken: any;
  currentCustomer: CustomerLogin = new CustomerLogin;

  statusResponse: string = "";

  httpurlencodedOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  constructor(
    private http: HttpClient,
    private routerService: Router,
    private jwtHelperService: JwtHelperService
  ) { }

  refresh(): boolean {
    this.http.get<any>(this.baseUrl + '/token/refresh')
      .subscribe(res => {
        const refresh_token = res;
        if (refresh_token && refresh_token.status === 'SUCCESS') {
          console.log("We reach refresh success");
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          localStorage.setItem('access_token', refresh_token.data.accessToken);
          console.log('Token in Guard' + localStorage.getItem('access_token'));
          localStorage.setItem('refresh_token', refresh_token.data.refreshToken);
        }
      });
    return true;
  }

  login(model: any) {
    let mobileNumber = ''
    if (model.mobile.startsWith('0')) {
      mobileNumber = model.mobile.substring(1, model.mobile.length);
      mobileNumber = "95" + mobileNumber;
    } else if (model.mobile.startsWith('959')) {
      mobileNumber = model.mobile;
    } else {
      mobileNumber = "959" + mobileNumber;
    }

    // const requestBody = new HttpParams()
    //   .set(`loginId`, mobileNumber)
    //   .set(`password`, model.password)

    // working with UrlSearchParams...
    const requestBody = new URLSearchParams();
    requestBody.set('loginId', model.mobile);
    requestBody.set('password', model.password);

    return this.http.post(this.loginUrl, requestBody, this.httpurlencodedOptions).pipe(
      map((response: any) => {
        const customer = response;
        console.log("login resp:", customer);
        if (customer && customer != undefined && customer.status === 'SUCCESS') {
          localStorage.clear();
          localStorage.setItem('access_token', customer.data.accessToken);
          localStorage.setItem('refresh_token', customer.data.refreshToken);
          localStorage.setItem('customer_id', customer.data.empId);
        }
      })
    )
  }

  loggedIn() {
    const token = localStorage.getItem('access_token');
    console.log('Token in Auth Service' + token);
    return !this.jwtHelper.isTokenExpired(token || '');
  }


  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('customer_id');
    // localStorage.removeItem('name');
    // localStorage.removeItem('gender');
    // localStorage.removeItem('email');
    // localStorage.removeItem('mobile');
    this.routerService.navigate(['/login']);
  }
}
