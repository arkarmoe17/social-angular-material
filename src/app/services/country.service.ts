import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MASTER_DATA } from '../utils/_constants/api-constant';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  country_url = MASTER_DATA.COUNTRY;

  constructor(
    private httpClient: HttpClient
  ) { }


  //fetch all countries
  getCountryLists(): Observable<any> {
    return this.httpClient.get<any>(`${this.country_url}/lists`);
  }

  //delete country
  deleteCountry(id: number): Observable<any> {
    return this.httpClient.delete(`${this.country_url}/${id}`, { responseType: 'text' });
  }

  //create country
  createCountry(data: any) {
    return this.httpClient.post(`${this.country_url}/new`, data);
  }

  //update country
  updateCountry(id: number, data: any) {
    return this.httpClient.put(`${this.country_url}/${id}`, data)
  }

}
