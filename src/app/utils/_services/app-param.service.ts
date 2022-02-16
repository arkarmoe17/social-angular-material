import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppParamService {
  private app_param_url = environment.base_url + "/app-param";

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAllAppParameters():Observable<any> {
    return this.httpClient.get<any>(this.app_param_url + "/lists");
  }
}
