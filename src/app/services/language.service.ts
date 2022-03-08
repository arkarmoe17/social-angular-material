import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MASTER_DATA } from '../utils/_constants/api-constant';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language_url = MASTER_DATA.LANGUAGE;

  constructor(
    private http: HttpClient
  ) { }

  //get language lists
  getLanguageLists(): Observable<any> {
    return this.http.get<any>(`${this.language_url}/lists`)
  }

  //create language 
  createLanguage(data:any){
    return this.http.post(`${this.language_url}/new`,data);
  }

}
