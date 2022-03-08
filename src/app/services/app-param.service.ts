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
    private http: HttpClient,
  ) { }

  getAllAppParameters():Observable<any> {
    return this.http.get<any>(`${this.app_param_url}/lists`);
  }

  update(id:number, data:any){
    return this.http.put(`${this.app_param_url}/${id}`,data);
  }
}
