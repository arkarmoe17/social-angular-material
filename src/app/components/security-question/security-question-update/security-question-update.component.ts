import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SecurityQuestionService } from 'src/app/services/security-question.service';
import { SecurityQuestion } from '../security-question-view/security-question-view.component';

@Component({
  selector: 'app-security-question-update',
  templateUrl: './security-question-update.component.html',
  styleUrls: ['./security-question-update.component.sass']
})
export class SecurityQuestionUpdateComponent implements OnInit {
  questionForm !:FormGroup
  securityQuestion : SecurityQuestion

  constructor(
    private fb : FormBuilder,
    public dialogRef : MatDialogRef<SecurityQuestionUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SecurityQuestion,
    private questionService : SecurityQuestionService,
  ) { 
    this.securityQuestion = this.data;
    console.log("_constructor:",this.securityQuestion);
    
  }

  generateForm(){
    this.questionForm = this.fb.group({
      questionType: ['',[Validators.required,Validators.maxLength(10),Validators.pattern('^[1-9]\\d*$')]],
      question: ['',[Validators.required,Validators.maxLength(50),Validators.pattern('^[1-9]\\d*$')]],
    });
  }
  get questionType() :any{
    return this.questionForm.get("questionType");
  }
  get question() :any{
    return this.questionForm.get("question");
  }

  updateQuestion(){
    console.log("id: | form:",this.securityQuestion.id,this.questionForm.value);
    this.questionService.update(this.securityQuestion.id,this.questionForm.value)
    .subscribe({
      next: (data)=>{
        this.closeDialog();
      },
      error: (_e)=>{
        console.error("submition fail.")
      },
      complete: () => console.log("completed.")
    })
  }

  closeDialog(){
    return this.dialogRef.close();
  }

  patchData(){
    this.questionForm.patchValue({questionType:this.securityQuestion.questionType,question:this.securityQuestion.question})    
  }

  ngOnInit(): void {
    this.generateForm();
    this.patchData();
  }

}
