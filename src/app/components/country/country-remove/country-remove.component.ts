import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-country-remove',
  templateUrl: './country-remove.component.html',
  styleUrls: ['./country-remove.component.sass']
})
export class CountryRemoveComponent implements OnInit {
  id : any
  constructor(
    private route :ActivatedRoute
  ) {
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log("component id:{}",this.id);
    });
  }

}
