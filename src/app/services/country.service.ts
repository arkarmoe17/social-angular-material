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
    private http: HttpClient
  ) { }


  //fetch all countries
  getCountryLists(): Observable<any> {
    return this.http.get<any>(`${this.country_url}/lists`);
  }

  //delete country
  deleteCountry(id: number): Observable<any> {
    return this.http.delete(`${this.country_url}/${id}`, { responseType: 'text' });
  }

  //create country
  createCountry(data: any) {
    return this.http.post(`${this.country_url}/new`, data);
  }

  //update country
  updateCountry(id: number, data: any) {
    return this.http.put(`${this.country_url}/${id}`, data)
  }

}
