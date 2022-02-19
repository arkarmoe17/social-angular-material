import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DASHBOARD } from '../utils/_constants/api-constant';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  dashboard_url = DASHBOARD;

  constructor(
    private httpClient: HttpClient,
  ) { }

  //reg_login_count 
  getRegAndLoginUserCount(): Observable<any> {
    return this.httpClient.get<any>(`${this.dashboard_url}/register-login/count`);
  }

}
