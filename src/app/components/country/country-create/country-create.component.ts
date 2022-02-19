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
    });
  }

  get countryCode(): any {
    return this.createCountryForm.get('countryCode');
  }

  get countryName(): any {
    return this.createCountryForm.get('countryName');
  }
  

  createCountry() {
    this.countryService.createCountry(this.createCountryForm.value)
      .subscribe({
        next: (data)=>{
          this.onNoClick();
        },
        error: (_e)=>{
          console.error("submition fail.")
        }
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.genereateCountryForm();
  }
}
