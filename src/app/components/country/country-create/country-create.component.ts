import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'app-country-create',
  templateUrl: './country-create.component.html',
  styleUrls: ['./country-create.component.css']
})
export class CountryCreateComponent implements OnInit {
  createCountryForm!: FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService,
    public dialogRef: MatDialogRef<CountryCreateComponent>,
    ){}

  genereateCountryForm() {
    this.createCountryForm = this.fb.group({
      countryCode: ['',[Validators.required,Validators.maxLength(10)]],
      countryName: ['',[Validators.required,Validators.maxLength(50)]],
      countryNick: ['',[Validators.required,Validators.maxLength(10)]],
      countryPrefix: ['',[Validators.required,Validators.maxLength(10)]],
      countryFlagUrl : ['',[Validators.required]]
    });
  }

  get countryCode(): any {
    return this.createCountryForm.get('countryCode');
  }
  get countryName(): any {
    return this.createCountryForm.get('countryName');
  }
  get countryNick(): any {
    return this.createCountryForm.get('countryNick');
  }
  get countryPrefix(): any {
    return this.createCountryForm.get('countryPrefix');
  }
  get countryFlagUrl(): any{
    return this.createCountryForm.get('countryFlagUrl');
  }

  onFileSelect(_event: any){  
    if (_event.target.files.length > 0) {
      const file = _event.target.files[0];
      // this.createCountryForm.patchValue({
      //   countryFlagUrl: file
      // });
      this.createCountryForm.controls['countryFlagUrl'].setValue(file);

      this.createCountryForm.get('countryFlagUrl')?.updateValueAndValidity; 
    }
  }
  
  createCountry() {
    const formData : any = new FormData();
    formData.append('countryCode',this.createCountryForm.get('countryCode')?.value);
    formData.append('countryName',this.createCountryForm.get('countryName')?.value);
    formData.append('countryNick',this.createCountryForm.get('countryNick')?.value);
    formData.append('countryPrefix',this.createCountryForm.get('countryPrefix')?.value);
    formData.append('countryFlagUrl',this.createCountryForm.get('countryFlagUrl')?.value);

    this.countryService.createCountry(formData)
      .subscribe({
        next: (data)=>{
          this.closeDialog();
        },
        error: (_e)=>{
          console.error("submission fail.")
        }
      });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.genereateCountryForm();
  }
}
