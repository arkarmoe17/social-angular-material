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

  constructor(
    private fb: FormBuilder,
    private countryService : CountryService,
    public dialogRef: MatDialogRef<CountryUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Country,
  ) {
    this.country  = this.data;
  }

  generateForm() {
    this.updateCountryForm = this.fb.group({
      countryCode: ['',[Validators.required,Validators.maxLength(10)]],
      countryName: ['',[Validators.required,Validators.maxLength(50)]],
    });
  }

  get countryCode(): any {
    return this.updateCountryForm.get('countryCode');
  }

  get countryName(): any {
    return this.updateCountryForm.get('countryName');
  }
  
  updateCountry() {
    if(this.updateCountryForm.valid){
      this.countryService.updateCountry(this.country.id,this.updateCountryForm.value)
        .subscribe({
          next: (data)=>{
            this.onNoClick();
          },
          error: (_e)=>{
            console.error("submition fail.")
          }
        });
    }
  }
 
  onNoClick(): void {
    this.dialogRef.close();
  }

  patchData(){
    this.updateCountryForm.patchValue({countryCode:this.country.countryCode,countryName:this.country.country})    
  }

  ngOnInit(): void {
    this.generateForm();
    this.patchData(); 
  }

}
