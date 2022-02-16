import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/utils/_entities/country/country';

@Component({
  selector: 'app-country-update',
  templateUrl: './country-update.component.html',
  styleUrls: ['./country-update.component.sass']
})
export class CountryUpdateComponent implements OnInit {
  public country: Country = {
    id: 0,
    countryCode: '',
    country: '',
    isDelete: false
  };
  constructor(
    private router: Router,
  ) {
    // router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
    //   const navigation = router.getCurrentNavigation();
    //   this.country = navigation.extras.state['country'];
    //   // tracingService.trace({id: navigation.extras.state.tracingId});
    // });
  }

  ngOnInit(): void {
  }

}
