import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from '../_commons/global-component';

@Injectable({
  providedIn: 'root'
})
export class SecurityQuestionService {
  constructor(
    private httpClient: HttpClient,
  ) { }

  //get all security questions
  getAllSecurityQuestions():Observable<any>{
    return this.httpClient.get<any>(GlobalComponent.security_question_url+"/lists");
  }

  //delete parameter
  delete(id: number):Observable<any>{
    return this.httpClient.delete(`${GlobalComponent.security_question_url}/${id}`,{responseType:'text'});
  }
}
