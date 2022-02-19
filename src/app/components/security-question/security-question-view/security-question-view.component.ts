import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { SecurityQuestionService } from '../../../services/security-question.service';
import { SecurityQuestionCreateComponent } from '../security-question-create/security-question-create.component';
import { SecurityQuestionDeleteComponent } from '../security-question-delete/security-question-delete.component';
import { SecurityQuestionUpdateComponent } from '../security-question-update/security-question-update.component';

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
    public dialog : MatDialog,
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

  createModal(): void{
    const dialogRef = this.dialog.open(SecurityQuestionCreateComponent, {
      height: '400px',
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reloadData();    
    });
  }

  deleteModal(id:number): void {
    const dialogRef = this.dialog.open(SecurityQuestionDeleteComponent, {
      height: '200px',
      width: '400px',
      data: {id:id},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');  
      this.reloadData();    
    });
  }

  updateModal(question:SecurityQuestion){
    const dialogRef = this.dialog.open(SecurityQuestionUpdateComponent,{
      height: '400px',
      width: '450px',
      data: question,
    });
    dialogRef.afterClosed().subscribe(res=>{
      this.reloadData();
    })
  }

  //delete 
  delete(id: number){
    console.log("deleted id:{}",id);
    return this.securityQuestionService.delete(id)
    .subscribe({
      next: (data)=>{
        console.log(data);
        console.log("Status:{}",data.status)
        this.reloadData();
      },
      error: (_e)=> console.error("error occur."),
      complete:()=> console.log("completed.")
    });
  }

  //reload 
  reloadData(){
    console.log("reloading.");
    this.getAllSecurityQuestions();
  }
  
  ngOnInit(): void {
    this.getAllSecurityQuestions();
  }

}
