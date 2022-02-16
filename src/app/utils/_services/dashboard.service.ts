import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  //URL 

  dashboard_url = environment.base_url+ "/dashboard" 
  register_login_count_url = this.dashboard_url + "/register-login/count";

  constructor(
    private httpClient: HttpClient,
  ) { }

  //reg_login_count 
  getRegAndLoginUserCount(): Observable<any> {
    return this.httpClient.get<any>(this.register_login_count_url);
  }

}
