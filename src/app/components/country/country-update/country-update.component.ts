import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Country } from 'src/app/utils/_entities/country/country';
import { CountryService } from '../../../services/country.service';

@Component({
  selector: 'app-country-update',
  templateUrl: './country-update.component.html',
  styleUrls: ['./country-update.component.sass']
})
export class CountryUpdateComponent implements OnInit {
  updateCountryForm!: FormGroup;
  country: Country;
  selectedFile: File | undefined;

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService,
    public dialogRef: MatDialogRef<CountryUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Country,
  ) {
    this.country = this.data;
  }

  generateForm() {
    this.updateCountryForm = this.fb.group({
      countryCode: ['', [Validators.required, Validators.maxLength(10)]],
      countryName: ['', [Validators.required, Validators.maxLength(50)]],
      countryNick: ['', [Validators.required, Validators.maxLength(10)]],
      countryPrefix: ['', [Validators.required, Validators.maxLength(10)]],
      countryFlagUrl : ['',[Validators.required]]
    });
  }

  get countryCode(): any {
    return this.updateCountryForm.get('countryCode');
  }
  get countryName(): any {
    return this.updateCountryForm.get('countryName');
  }
  get countryNick(): any {
    return this.updateCountryForm.get('countryNick');
  }
  get countryPrefix(): any {
    return this.updateCountryForm.get('countryPrefix');
  }
  get countryFlagUrl(): any {
    return this.updateCountryForm.get('countryFlagUrl');
  }
  
  onFileSelect(_event: any) {
    if (_event.target.files.length > 0) {
      this.selectedFile = _event.target.files[0];
      // this.createCountryForm.patchValue({
      //   countryFlagUrl: file
      // });
      this.updateCountryForm.controls['countryFlagUrl'].setValue(this.selectedFile);
      this.updateCountryForm.get('countryFlagUrl')?.updateValueAndValidity;
    }
  }

  updateCountry() {
    console.log("countryForm:", this.updateCountryForm.value);
    console.log("file:",this.selectedFile);
    
    const formData = new FormData();
    formData.append('countryCode', this.updateCountryForm.get('countryCode')?.value);
    formData.append('countryName', this.updateCountryForm.get('countryName')?.value);
    formData.append('countryNick', this.updateCountryForm.get('countryNick')?.value);
    formData.append('countryPrefix', this.updateCountryForm.get('countryPrefix')?.value);
    formData.append('countryFlagUrl',this.updateCountryForm.get('countryFlagUrl')?.value);

    if (this.updateCountryForm.valid) {
      this.countryService.updateCountry(this.country.id, formData)
        .subscribe({
          next: (data) => {
            this.closeDialog();
          },
          error: (_e) => {
            console.error("submition fail.")
          }
        });
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  patchData() {
    this.updateCountryForm.patchValue(
      {
        countryCode: this.country.countryCode,
        countryName: this.country.country,
        countryNick: this.country.countryNick,
        countryPrefix: this.country.countryPrefix,
        countryFlagUrl: this.selectedFile
      })
  }

  ngOnInit(): void {
    this.generateForm();
    this.patchData();
  }

}
