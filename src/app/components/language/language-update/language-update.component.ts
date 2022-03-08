import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LanguageService } from 'src/app/services/language.service';
import { Language } from 'src/app/utils/_entities/language/language';

@Component({
  selector: 'app-language-update',
  templateUrl: './language-update.component.html',
  styleUrls: ['./language-update.component.css']
})
export class LanguageUpdateComponent implements OnInit {
  languageForm !: FormGroup;
  language : Language;

  constructor(
    private fb : FormBuilder,
    private languageService : LanguageService,
    public dialogRef : MatDialogRef<LanguageUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Language,
  ) { 
    this.language = this.data;
  }

  generateForm() {
    this.languageForm = this.fb.group({
      iso: ['', [Validators.required, Validators.maxLength(10)]],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(255)]],
      locale: ['', [Validators.required]]
    })
  }

  get iso(): any {
    return this.languageForm.get('iso')
  }

  get name(): any {
    return this.languageForm.get('name');
  }

  get description(): any {
    return this.languageForm.get('description');
  }

  get locale(): any {
    return this.languageForm.get('locale');
  }

  patchData() {
    this.languageForm.patchValue(
      {
        iso: this.language.iso,
        name: this.language.name,
        description: this.language.description,
        locale: this.language.locale
      })
  }

  //update language
  updateLanguage(){
    console.log("language:{}",this.languageForm.value);
    this.languageService.updateLanguage(this.language.id,this.languageForm.value)
    .subscribe({
      next: (data) => {
        console.log("data:", data);
        this.closeDialog();
        //todo:  success or fail msg
      },
      error: (_e) => {
        console.error("submission fail.")
      }
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.generateForm();
    this.patchData();
  }

}
