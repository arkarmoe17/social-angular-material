import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-language-create',
  templateUrl: './language-create.component.html',
  styleUrls: ['./language-create.component.css']
})
export class LanguageCreateComponent implements OnInit {
  languageForm !: FormGroup;

  constructor(
    private fb: FormBuilder,
    private languageService: LanguageService,
    public dialogRef: MatDialogRef<LanguageCreateComponent>
  ) { }


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

  createLanguage() {
    console.log("language form :", this.languageForm.value);
    this.languageService.createLanguage(this.languageForm.value)
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
  }

}
