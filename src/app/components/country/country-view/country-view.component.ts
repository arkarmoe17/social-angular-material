import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Country } from 'src/app/utils/_entities/country/country';
import { CountryService } from 'src/app/utils/_services/country.service';
import { CountryUpdateComponent } from '../country-update/country-update.component';


const routes: Routes = [
  { path: 'country-update', component: CountryUpdateComponent },
]

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
})
export class CountryViewComponent implements OnInit {
  // @ViewChild('countryUpdateModal')modal :
  //      | CountryUpdateComponent<CountryViewComponent>
  //      | undefined;

  countries: Country[] = [];
  showModal = false;

  constructor(
    private countryService: CountryService,
    private router: Router,
  ) { }


  //get country lists
  getCountryLists() {
    return this.countryService.getCountryLists().subscribe(res => {
      this.countries = res.data;
      console.log("country data:", this.countries);
    });
  }

  //open update modal
  openUpdateModal(country: Country) {
    console.log("country:{}", country);

    this.showModal = true;
    console.log("Click edit funtion button. {}", this.showModal);
    this.router.navigate(['/country-update', { state: { country: country }}]);
  }

  //open remove modal
  openRemoveModal(id: number) {
    console.log("Remove country id:{}", id);
    // this.router.navigate(['/country-remove']);
    this.countryService.deleteCountry(id)
    .subscribe(
      {
        next:(data)=>{
          console.log("data:{}",data);          
          //show success msg
          this.reloadData();
        },
        error: (e) =>console.error("error occur."),
        complete: () => console.log("completed.")
      }
    );

  }

  reloadData(){
    this.getCountryLists();
  }

  ngOnInit(): void {
    this.getCountryLists();
  }
}
