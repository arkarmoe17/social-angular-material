import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SecurityQuestionService } from 'src/app/utils/_services/security-question.service';

export interface SecurityQuestion {
  id: number;
  questionType: number;
  question: string;
}

@Component({
  selector: 'app-security-question-view',
  templateUrl: './security-question-view.component.html',
  styleUrls: ['./security-question-view.component.sass']
})
export class SecurityQuestionViewComponent implements OnInit {
  questions: SecurityQuestion[] = [];
  constructor(
    private securityQuestionService: SecurityQuestionService,
  ) { }


  //get all questions
  getAllSecurityQuestions() {
    return this.securityQuestionService.getAllSecurityQuestions().subscribe(
      res => {
        this.questions = res.data;
        console.log("security question :{}",this.questions);
      }
    );
  }

  //delete 
  delete(id: number){
    console.log("deleted id:{}",id);
    return this.securityQuestionService.delete(id)
    .subscribe({
      next: (data)=>{
        console.log(data);
        console.log("Status:{}",data.status)
        this.reload();
      },
      error: (_e)=> console.error("error occur."),
      complete:()=> console.log("completed.")
    });
  }

  //reload 
  reload(){
    console.log("reloading.");
    this.getAllSecurityQuestions();
  }
  
  ngOnInit(): void {
    this.getAllSecurityQuestions();
  }

}
