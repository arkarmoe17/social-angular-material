import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MASTER_DATA } from '../utils/_constants/api-constant';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  master_url = MASTER_DATA;

  constructor(
    private httpClient: HttpClient
  ) { }


  //fetch all countries
  getCountryLists(): Observable<any> {
    return this.httpClient.get<any>(`${this.master_url.COUNTRY}/lists`);
  }

  //delete country
  deleteCountry(id: number): Observable<any> {
    return this.httpClient.delete(`${this.master_url.COUNTRY}/${id}`, { responseType: 'text' });
  }

  //create country
  createCountry(data: any) {
    return this.httpClient.post(`${this.master_url.COUNTRY}/new`, data);
  }

  //update country
  updateCountry(id:number, data: any){
    return this.httpClient.put(`${this.master_url.COUNTRY}/${id}`,data)
  }

}
