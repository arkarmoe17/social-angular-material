import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SecurityQuestionService } from 'src/app/services/security-question.service';

@Component({
  selector: 'app-security-question-create',
  templateUrl: './security-question-create.component.html',
  styleUrls: ['./security-question-create.component.css']
})
export class SecurityQuestionCreateComponent implements OnInit {
  questionForm !: FormGroup;
  localeFrom !: FormGroup;

  constructor(
    private fb: FormBuilder,
    private questionService : SecurityQuestionService,
    public dialogRef: MatDialogRef<SecurityQuestionCreateComponent>,
  ) { }

  generateForm(){
    this.questionForm = this.fb.group({
      questionType: ['',[Validators.required]],
      question: ['',[Validators.required,Validators.maxLength(50)]],
      // localeFrom : this.fb.group({
      //   name : ['',[Validators.required]],
      //   locale: ['',[Validators.required]]
      // })
    });
  }


  get questionType() : any{
    return this.questionForm.get('questionType');
  }

  get question() : any{
    return this.questionForm.get('question');
  }

  createQuestion(){
    this.questionService.create(this.questionForm.value)
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

  ngOnInit(): void {
    this.generateForm();
  }

}
