import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppParamService } from 'src/app/services/app-param.service';
import { AppParam } from '../app-param-view/app-param-view.component';

@Component({
  selector: 'app-app-param-update',
  templateUrl: './app-param-update.component.html',
  styleUrls: ['./app-param-update.component.sass']
})
export class AppParamUpdateComponent implements OnInit {
  appParamForm !: FormGroup
  appParameter : AppParam

  constructor(
    private fb : FormBuilder,
    public dialogRef : MatDialogRef<AppParamUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AppParam,
    private appParamService : AppParamService
  ) {
    this.appParameter = this.data;
  }

  generateForm(){
    this.appParamForm = this.fb.group(
     {
      otpExpireMin : [,[Validators.required,Validators.pattern('^[1-9]\\d*$')]],
      otpLength : [,[Validators.required,Validators.pattern('^[1-9]\\d*$')]]
     }
    )
  }
  get otpExpireMin(): any{
    return this.appParamForm.get("otpExpireMin");
  }

  get otpLength(): any{
    return this.appParamForm.get("otpLength");
  }

  updateAppParam(){
    console.log("update app param.",this.appParamForm.value);
    this.appParamService.update(this.appParameter.id,this.appParamForm.value)
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

  patchData(){
    this.appParamForm.patchValue({otpExpireMin:this.appParameter.otpExpireMin,otpLength: this.appParameter.otpLength})
  }

  closeDialog(){
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.generateForm();
    this.patchData();
  }

}
