import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse  } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { CustomerRegister } from '../_entities/customer/customer-register';
import { environment } from 'src/environments/environment';
import { ServerResponse } from '../_commons/server-response';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseURL = environment.base_url;

  httpurlencodedOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
  };

  httpjsonOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  // x-wwww-form-urlencoded customer register request.
  // handle error when registration fail.

  customerRegister(model: any): Observable<any> {
    const requestBody = new HttpParams()
      .set(`name`, model.name)
      .set(`password`, model.password)
      .set(`gender`, model.gender)
      .set(`email`, model.email)
      .set(`mobile`, model.mobile);
    return this.http.post<any>(this.baseURL + '/register/customerRegister',
      requestBody, 
      this.httpurlencodedOptions);
  }

  forgetPassword() {
    const requestBody = new HttpParams()
      .set(`mobile`, `959797460830`)
      .set(`newPassword`, `Mur@2994`)
      .set(`confirmPassword`, `Mur@2994`)
    return this.http.post<any>(this.baseURL + '/profile/forgotPasswordChange', requestBody, this.httpurlencodedOptions);
  }

  otpVerify(mobile: string, otp: string) {
    return this.http.get<any>(this.baseURL + '/register/validateOTP?mobile=' + mobile + '&otpCode=' + otp, this.httpurlencodedOptions )
  }

  getCountryList(): Observable<any> {
    return this.http.get<any>(this.baseURL + '/masterData/getCountryList');
  }

  findUserByEmail(email: string): Observable<any> {
    return this.http.get<any>(this.baseURL + '/api/email?email=' + email);
  }

  findUserByMobile(mobile: string): Observable<any> {
    return this.http.get<any>(this.baseURL + '/api/mobile?mobile=' + mobile);
  }

  getOtp(mobile: string) {
    return this.http.get<any>(this.baseURL + '/register/getOTP?mobile=' + mobile);
  }
}
