import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService } from '../../services/customer.service';
import { Country } from '../../utils/_entities/master-data/country';


@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.sass']
})
export class CountDownComponent implements OnInit, OnDestroy {

  private subscription!: Subscription;

  public countdownseconds = 0;

  public seconds = 180;

  public countries: Country[] = [];

  // private getTimeDifference () {
  //   this.countdownseconds = Math.floor((this.seconds));
  //   if(this.seconds > 0) {
  //     this.seconds = this.seconds - 1;
  //   } else {
  //     this.ngOnDestroy();
  //   }

  // }

  getCountryList(): void {
    this.customerService.getCountryList()
      .subscribe(
        res => {
          this.countries = res.data.countryList;
          console.log(this.countries[0].country);
        }
      );
  }

  trackCountry(index: number, country: Country) {
    return country ? country.countryId : undefined;
  }
  // trackCountry(country: Country) { return country; }

  // private allocateTimeUnits(timeDiff: number) {

  // }

  constructor(private customerService: CustomerService) { }


  ngOnInit(): void {
    this.getCountryList();
    // this.subscription = interval(1000)
    //   .subscribe(x => { this.getTimeDifference();});
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
