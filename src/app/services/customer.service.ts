import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CUSTOMER, MASTER_DATA, REGISTER } from '../utils/_constants/api-constant';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  register_url = REGISTER
  master_data_url = MASTER_DATA;
  get_otp_url = CUSTOMER.GET_OTP;
  validate_otp_url = CUSTOMER.VALIDATE_OTP;
  forgot_password_url = CUSTOMER.FORGOT_PASSWORD;
  find_by_mobile_url = CUSTOMER.FIND_BY_MOBILE;
  find_by_email_url = CUSTOMER.FIND_BY_EMAIL;


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
    return this.http.post<any>(this.register_url, requestBody,  this.httpurlencodedOptions);
  }

  forgetPassword() {
    const requestBody = new HttpParams()
      .set(`mobile`, `959797460830`)
      .set(`newPassword`, `Mur@2994`)
      .set(`confirmPassword`, `Mur@2994`)
    return this.http.post<any>(this.forgot_password_url, requestBody, this.httpurlencodedOptions);
  }

  otpVerify(mobile: string, otp: string) {
    return this.http.get<any>(`${this.validate_otp_url}?mobile=` + mobile + '&otpCode=' + otp, this.httpurlencodedOptions )
  }

  getCountryList(): Observable<any> {
    return this.http.get<any>(this.master_data_url.COUNTRY);
  }

  findUserByEmail(email: string): Observable<any> {
    return this.http.get<any>(this.find_by_email_url + email);
  }

  findUserByMobile(mobile: string): Observable<any> {
    return this.http.get<any>(this.find_by_mobile_url + mobile);
  }

  getOtp(mobile: string) {
    return this.http.get<any>(this.get_otp_url + mobile);
  }
}
