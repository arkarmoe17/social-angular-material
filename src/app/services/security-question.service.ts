import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SECURITY_QUESTION } from '../utils/_constants/api-constant';

@Injectable({
  providedIn: 'root'
})
export class SecurityQuestionService {

  security_question_url = SECURITY_QUESTION

  constructor(
    private httpClient: HttpClient,
  ) { }

  //get all security questions
  getAllSecurityQuestions():Observable<any>{
    return this.httpClient.get<any>(`${this.security_question_url}/lists`);
  }

  create(data:any):Observable<any>{
    return this.httpClient.post(`${this.security_question_url}/new`,data);
  }

  update(id:number, data:any):Observable<any>{
    return this.httpClient.put(`${this.security_question_url}/${id}`,data);
  }

  delete(id: number):Observable<any>{
    return this.httpClient.delete(`${this.security_question_url}/${id}`,{responseType:'text'});
  }
}
