import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_PARAMETER } from '../utils/_constants/api-constant';

@Injectable({
  providedIn: 'root'
})
export class AppParamService {
  app_param_url = APP_PARAMETER

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAllAppParameters():Observable<any> {
    return this.httpClient.get<any>(`${this.app_param_url}/lists`);
  }

  update(id:number, data:any){
    return this.httpClient.put(`${this.app_param_url}/${id}`,data);
  }
}
