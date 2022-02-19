import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { SecurityQuestionService } from 'src/app/services/security-question.service';

@Component({
  selector: 'app-security-question-delete',
  templateUrl: './security-question-delete.component.html',
  styleUrls: ['./security-question-delete.component.sass']
})
export class SecurityQuestionDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SecurityQuestionDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private securityQuestionService : SecurityQuestionService
  ) { }

  delete(){
    console.log("delete id:",this.data.id)
    this.securityQuestionService.delete(this.data.id)
    .subscribe(res=>console.log("res:",res))
  }

  closeDialog(){
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
