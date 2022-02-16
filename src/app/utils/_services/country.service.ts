import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs'
import {GlobalComponent} from '../_commons/global-component'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  //URL 
  country_url = environment.base_url+"/country";

  constructor(
    private httpClient: HttpClient
  ) { }


  //fetch all countries
  getCountryLists() : Observable<any>{
    return this.httpClient.get<any>(this.country_url + "/lists");
  }

  //delete country
  deleteCountry(id: number):Observable<any>{
    return this.httpClient.delete(`${GlobalComponent.country_url}/${id}`,{responseType: 'text'});
  }

  //create country
  createCountry(data: any){
    return this.httpClient.post(`${GlobalComponent.country_url}/new`, data);
  }

}
