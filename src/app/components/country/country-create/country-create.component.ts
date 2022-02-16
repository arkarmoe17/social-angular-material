import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/utils/_services/country.service';

@Component({
  selector: 'app-country-create',
  templateUrl: './country-create.component.html',
  styleUrls: ['./country-create.component.sass']
})
export class CountryCreateComponent implements OnInit {
  // @Input() close!: Function;
  // @Input() reload!: Function;
  
  createCountryForm!: FormGroup;
  error = false;
  confirmCreate = false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private countryService : CountryService
  ) {}

  //country form
  genereateCountryForm() {
    this.createCountryForm = this.formBuilder.group({
      countryCode: ['',[Validators.required,Validators.maxLength(10)]],
      countryName: ['',[Validators.required,Validators.maxLength(50)]]
    });
  }
  get countryCode() { return this.createCountryForm.get("countryCode"); }
  get countryName() { return this.createCountryForm.get("countryName"); }

  
  createCountry() {
    this.confirmCreate = true;
    console.log("calling the create function.");
    this.error = false;
    this.countryCode?.markAsDirty();
    this.countryName?.markAsDirty();
    if (!this.createCountryForm.valid){
      console.error("not valid form.");
      return;
    } 
    console.log("form :", this.createCountryForm.value)
    this.countryService.createCountry(this.createCountryForm.value)
      .subscribe({
        next: (data)=>{
          // this.close();
          // this.reload();
          this.router.navigate(["/country"]);
        },
        error: (_e)=>{
          this.error = true
          console.error("submition fail.")
        }
      });
  }

  //just temp
  close(){
    this.router.navigate(["/country"]);
  }

  ngOnInit(): void {
    this.genereateCountryForm();
  }

}
